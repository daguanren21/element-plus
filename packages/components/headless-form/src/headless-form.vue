<template>
  <Form @submit="onSubmit">
    <slot />
  </Form>
</template>

<script lang="ts" setup>
import { headlessFormEmits, headlessFormProps } from './headless-form'
import { Form, type GenericObject } from 'vee-validate'

defineOptions({
  name: 'ElHeadlessForm',
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(headlessFormProps)
console.log(props)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits(headlessFormEmits)
function onSubmit(values: GenericObject) {
  console.log(values)
  emit('submit', values)
}
// init here
</script>
