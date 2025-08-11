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

const props = defineProps(headlessFormItemProps)

const vm = defineModel()
// const emits = defineEmits(headlessFormItemEmits)
</script>
