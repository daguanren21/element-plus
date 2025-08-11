<template>
  <form>
    <slot />
    <button ref="buttonRef" hidden @click="onSubmit">Submit</button>
  </form>
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue'
import zod from 'zod'
import {
  FormContextKey,
  headlessFormEmits,
  headlessFormProps,
} from './headless-form'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

import type { GenericObject } from 'vee-validate'
import type { ZodType } from 'zod'

defineOptions({
  name: 'ElHeadlessForm',
})

const props = defineProps(headlessFormProps)
const emits = defineEmits(headlessFormEmits)
// @ts-expect-error
const formRules = ref<Record<string, ZodType>>(props.rules)
const validationSchema = ref(toTypedSchema(zod.object(formRules.value)))
// 注册form-item rule
function registerRule(name: string, rule: ZodType) {
  if (rule) {
    validationSchema.value = toTypedSchema(
      zod.object(formRules.value).extend({ [name]: rule })
    )
  }
}

const { handleSubmit } = useForm({
  validationSchema: validationSchema.value,
})
provide(FormContextKey, {
  registerRule,
  rules: props.rules,
})
const formData = ref(props.model)

const formErrors = ref<Partial<Record<string, string>> | null>(null)
const buttonRef = ref<HTMLElement | null>(null)

const onSubmit = handleSubmit(
  (values: GenericObject) => {
    formData.value = { ...props.model, ...values }
    formErrors.value = null
    emits('submit', formData.value)
  },
  ({ errors }) => {
    formData.value = { ...props.model }
    formErrors.value = errors
  }
)
async function validateFileds() {
  buttonRef.value?.click()
  await onSubmit()
  return Promise.resolve({
    values: formData.value,
    errors: formErrors.value,
  })
}
defineExpose({
  validateFileds,
})
// init here
</script>
