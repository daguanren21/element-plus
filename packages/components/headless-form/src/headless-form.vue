<template>
  <Form>
    <slot />
  </Form>
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue'
import zod from 'zod'
import {
  FormContextKey,
  headlessFormEmits,
  headlessFormProps,
} from './headless-form'
import { Form, useForm } from 'vee-validate'
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

// 注册form-item rule  todo 这里存在问题动态注册的不能及时触发，validationSchema只能初始化给，目前没找到解决方法
function registerRule(name: string, rule: ZodType) {
  if (rule) {
    validationSchema.value = toTypedSchema(
      zod.object(formRules.value).extend({ [name]: rule })
    )
  }
}

const { handleSubmit, handleReset } = useForm({
  validationSchema: validationSchema.value,
})
provide(FormContextKey, {
  registerRule,
  rules: props.rules,
})
const formData = ref(props.model)

const formErrors = ref<Partial<Record<string, string>> | null>(null)

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
  await onSubmit()
  return {
    values: formData.value,
    errors: formErrors.value,
  }
}
function resetFields() {
  handleReset()
}

defineExpose({
  validateFileds,
  resetFields,
})
// init here
</script>
