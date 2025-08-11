<template>
  <div>
    <el-headless-form-item v-bind="props" v-model="modelValue">
      <template #default="{ field }">
        <el-input
          v-model="(modelValue as any)"
          @change="handleChange"
          @input="handleInput"
          @blur="handleBlur"
          v-bind="field"
        />
      </template>
    </el-headless-form-item>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useField } from 'vee-validate'

import {
  ElHeadlessFormItem,
  ElInput,
  headlessFormItemEmits,
  headlessFormItemProps,
} from '@element-plus/components'
import { toTypedSchema } from '@vee-validate/zod'

const props = defineProps(headlessFormItemProps)
const fieldSchema = computed(() =>
  props.rule ? toTypedSchema(props.rule) : ''
)
const { value: modelValue, validate } = useField(props.prop, fieldSchema.value)

const emits = defineEmits(headlessFormItemEmits)

async function handleChange(value: string) {
  try {
    await validate()
    emits('change', value)
  } catch (error) {
    console.log(error)
  }
}
async function handleInput(value: string) {
  try {
    await validate()
    emits('input', value)
  } catch (error) {
    console.log(error)
  }
}
async function handleBlur() {
  try {
    await validate()
  } catch (error) {
    console.log(error)
  }
}
</script>
