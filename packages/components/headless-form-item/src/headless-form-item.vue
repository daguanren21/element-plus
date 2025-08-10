<template>
  <div>
    <Field :name="props.prop" :type="props.prop">
      <slot />
    </Field>
    <ErrorMessage :name="props.prop" />
  </div>
</template>

<script lang="ts" setup>
import { ErrorMessage, Field } from 'vee-validate'
import {
  headlessFormItemEmits,
  headlessFormItemProps,
} from './headless-form-item'

defineOptions({
  name: 'ElHeadlessFormItem',
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(headlessFormItemProps)
console.log(props)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits(headlessFormItemEmits)

// init here
</script>
