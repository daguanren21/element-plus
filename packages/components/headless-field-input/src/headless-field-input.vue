<template>
  <div>
    <el-headless-form-item v-bind="props">
      <el-input v-model="(modelValue as any)" @change="handleChange" />
    </el-headless-form-item>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  ElHeadlessFormItem,
  ElInput,
  headlessFormItemProps,
} from '@element-plus/components'
import { toTypedSchema } from '@vee-validate/zod'
import { useField } from 'vee-validate'

const props = defineProps(headlessFormItemProps)
console.log(props.rules)
//@ts-ignore
const fieldSchema = computed(() => toTypedSchema(props.rules))
console.log(fieldSchema.value)
const { value: modelValue, validate } = useField(props.prop, fieldSchema.value)

async function handleChange(value: any) {
  modelValue.value = value
  const res = await validate()
  console.log(res)
}
</script>
