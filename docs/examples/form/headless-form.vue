<template>
  <ElHeadlessForm
    ref="form"
    :model="formData"
    :rules="schema"
    @submit="handleSubmit"
  >
    <ElHeadlessFieldInput v-model="formData.name" prop="name" label="姓名" />
    <ElHeadlessFieldInput
      v-model="formData.address"
      style="margin-top: 30px"
      prop="address"
      label="地址"
    />
    <el-button style="margin-top: 30px" type="primary" @click="saveForm"
      >保存</el-button
    >
  </ElHeadlessForm>
</template>

<script setup lang="ts">
import { reactive, useTemplateRef } from 'vue'
import { ElHeadlessFieldInput, ElHeadlessForm } from 'element-plus'
import zod from 'zod'

const schema = {
  name: zod.string().max(2, { message: '姓名不能超过2个字符' }),
  address: zod.string().max(5, { message: '地址不能超过5个字符' }),
}
const formData = reactive({
  name: '',
  address: '',
})
const formRef = useTemplateRef('form')

async function saveForm() {
  const res = await formRef.value?.validateFileds()
  console.log(res)
}

function handleSubmit(values) {
  console.log('Form submitted:', values)
}
</script>

<style scoped></style>
