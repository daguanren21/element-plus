import { headlessFieldInputProps } from './../../headless-field-input/src/headless-field-input'
import { buildProps, isString } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import { ZodType } from 'zod'

export const headlessFormItemProps = buildProps({
  /**
   * @description The name of the form field, which should correspond to a key in the form's initial values.
   */
  prop: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  rule: {
    type: ZodType
  },
} as const)

export type HeadlessFormItemProps = ExtractPropTypes<
  typeof headlessFieldInputProps
>

export type HeadlessFormItemPropsPublic = __ExtractPublicPropTypes<
  typeof headlessFormItemProps
>

export const headlessFormItemEmits = {
  change: (value: string) => isString(value),
  input: (value: string) => isString(value)
}
export type HeadlessFormItemEmits = typeof headlessFormItemEmits
