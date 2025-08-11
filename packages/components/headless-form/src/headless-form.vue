<template>
  <Form>
    <slot />
  </Form>
</template>

<script lang="ts" setup>
import zod, { ZodType } from 'zod'
import {
  FormContextKey,
  headlessFormEmits,
  headlessFormProps,
} from './headless-form'
import { Form, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { computed, provide, ref } from 'vue'

defineOptions({
  name: 'ElHeadlessForm',
})

const props = defineProps(headlessFormProps)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emits = defineEmits(headlessFormEmits)
const formRules = ref<Record<string, ZodType>>({})
const validationSchema = computed(() =>
  toTypedSchema(zod.object(formRules.value))
)

const { errors, handleSubmit } = useForm({
  validationSchema: validationSchema.value,
  initialValues: props.model,
})
// 注册form-item rule
function registerRule(name: string, rule: ZodType) {
  formRules.value[name] = rule
}
provide(FormContextKey, {
  registerRule,
})
const formData = ref(props.model)

const onSubmit = handleSubmit((values) => {
  console.log(props.model)
  console.log(formRules.value)
  console.log('form表单', values)
  formData.value = { ...props.model, ...values }
  emits('submit', formRules.value)
})
async function validateFileds() {
  try {
    await onSubmit()
    console.log(errors.value)
    return Promise.resolve(formData.value)
  } catch (error) {
    return Promise.reject(error)
  }
}
defineExpose({
  validateFileds,
})
// init here
</script>
