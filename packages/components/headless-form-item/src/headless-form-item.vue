<template>
  <div style="padding: 0px 30px">
    <Field
      v-slot="scoped"
      v-model="modelValue"
      :name="props.prop"
      :validate-on-model-update="true"
      :validate-on-input="false"
      :validate-on-blur="true"
      :validate-on-mount="false"
      :validate-on-change="true"
    >
      <div :class="ns.b()">
        <div :class="[ns.e('label'), ns.m(required ? 'is-required' : '')]">
          <slot name="label">
            {{ props.label }}
          </slot>
        </div>

        <div style="position: relative">
          <slot v-bind="scoped" />
          <slot name="error">
            <ErrorMessage :class="ns.m('is-error')" :name="props.prop" />
          </slot>
        </div>
      </div>
    </Field>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { ErrorMessage, Field, useField } from 'vee-validate'
import { headlessFormItemProps } from './headless-form-item'
import { FormContextKey } from '@element-plus/components'
import { isString } from '@element-plus/utils'
import { toTypedSchema } from '@vee-validate/zod'
import { useNamespace } from '@element-plus/hooks'

defineOptions({
  name: 'ElHeadlessFormItem',
})

const ns = useNamespace('headless-form-item')
const props = defineProps(headlessFormItemProps)

// 注册formItem rule 字段到全局
const { registerRule, rules } = inject(FormContextKey) as any
registerRule(props.prop, props.rule)

const fieldRule = props.rule || rules[props.prop]
const fieldSchema = computed(() => (fieldRule ? toTypedSchema(fieldRule) : ''))
const { value: modelValue } = useField(props.prop, fieldSchema.value)

// 判断是否必填
const required = computed(() => {
  if (fieldRule && !isString(fieldRule)) {
    return !['nullable', 'optional'].includes(fieldRule.def.type)
  }
  return false
})

// init here
</script>
