<template>
  <div style="padding: 0px 30px">
    <Field v-slot="scoped" :name="props.prop" v-model="vm">
      <div class="field">
        <div class="label" :class="{ required: required }">
          {{ props.label }}
        </div>
        <div style="position: relative">
          <slot v-bind="scoped" />
          <ErrorMessage
            style="position: absolute; left: 0; bottom: -25px; color: #f56c6c"
            :name="props.prop"
          />
        </div>
      </div>
    </Field>
  </div>
</template>

<script lang="ts" setup>
import { ErrorMessage, Field } from 'vee-validate'
import { headlessFormItemProps } from './headless-form-item'
import { computed, inject } from 'vue'
import { FormContextKey } from 'element-plus'
import { isString } from 'lodash-es'

defineOptions({
  name: 'ElHeadlessFormItem',
})
const props = defineProps(headlessFormItemProps)

// 注册formItem rule 字段到全局
const { registerRule } = inject(FormContextKey) as any

registerRule(props.prop, props.rule)

const vm = defineModel()

// 判断是否必填
const required = computed(() => {
  const rule = props.rule
  if (rule && !isString(rule)) {
    return !['nullable', 'optional'].includes(rule.def.type)
  }
  return false
})

// init here
</script>

<style lang="scss" scoped>
.field {
  display: flex;
  align-items: center;
  .label {
    white-space: nowrap;
    margin-right: 10px;
  }
  .required::before {
    content: '*';
    color: #f56c6c;
    margin-right: 5px;
  }
}
</style>
