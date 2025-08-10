<template>
  <ElHeadlessForm :model="formData" :rules="{}" @submit="handleSubmit">
    <ElHeadlessFieldInput
      prop="name"
      label="姓名"
      :required="false"
      :rules="schema"
      :model-value="formData.name"
    />
  </ElHeadlessForm>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ElHeadlessFieldInput, ElHeadlessForm } from 'element-plus'
import zod from 'zod'

const schema = zod.string().max(2, { message: 'Field is required' })
const formData = reactive({
  name: '',
})
function handleSubmit(values) {
  console.log('Form submitted:', values)
}
</script>

<style scoped></style>
