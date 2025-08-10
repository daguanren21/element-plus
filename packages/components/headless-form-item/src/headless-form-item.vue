<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {
  headlessFormItemEmits,
  headlessFormItemProps,
} from './headless-form-item'

defineOptions({
  name: 'ElHeadlessFormItem',
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(headlessFormItemProps)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits(headlessFormItemEmits)

// init here
</script>
