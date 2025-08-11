<template>
  <div>
    <el-headless-form-item v-bind="props" v-model="vm">
      <template #default="{ field }">
        <el-input v-model="vm" v-bind="field" />
      </template>
    </el-headless-form-item>
  </div>
</template>

<script setup lang="ts">
import {
  ElHeadlessFormItem,
  ElInput,
  headlessFormItemProps,
} from '@element-plus/components'
import { useVModel } from '@vueuse/core'

const props = defineProps(headlessFormItemProps)

const emit = defineEmits(['update:modelValue'])
const vm = useVModel(props, 'modelValue', emit)
</script>
