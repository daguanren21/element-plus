<template>
  <ElHeadlessForm
    ref="form"
    :model="formData"
    :rules="schema"
    @submit="handleSubmit"
  >
    <ElHeadlessFieldInput
      prop="name"
      label="姓名"
      :rule="schema.name"
      v-model="formData.name"
    />
    <ElHeadlessFieldInput
      style="margin-top: 30px"
      prop="address"
      label="地址"
      :rule="schema.address"
      v-model="formData.address"
    />
    <el-button style="margin-top: 30px" @click="saveForm" type="primary"
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
  address: zod.string().max(10, { message: '地址不能超过10个字符' }),
}
const formData = reactive({
  name: '',
  address: '',
})
const formRef = useTemplateRef('form')

async function saveForm() {
  let res = await formRef.value?.validateFileds()
  console.log(res)
}

function handleSubmit(values) {
  console.log('Form submitted:', values)
}
</script>

<style scoped></style>
