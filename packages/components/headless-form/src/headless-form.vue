<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { headlessFormEmits, headlessFormProps } from './headless-form'

defineOptions({
  name: 'ElHeadlessForm',
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(headlessFormProps)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits(headlessFormEmits)

// init here
</script>
