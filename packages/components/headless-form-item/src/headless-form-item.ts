import { headlessFieldInputProps } from './../../headless-field-input/src/headless-field-input'
import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

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
  required: {
    type: Boolean,
    default: false,
  },
  rules: {
    type: Object,
    default: () => ({}),
  },
} as const)

export type HeadlessFormItemProps = ExtractPropTypes<
  typeof headlessFieldInputProps
>

export type HeadlessFormItemPropsPublic = __ExtractPublicPropTypes<
  typeof headlessFormItemProps
>

export const headlessFormItemEmits = {}
export type HeadlessFormItemEmits = typeof headlessFormItemEmits
