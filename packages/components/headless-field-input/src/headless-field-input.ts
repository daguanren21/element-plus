import { buildProps, isString } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

export const headlessFieldInputProps = buildProps({
  /**
   * @description The name of the form field, which should correspond to a key in the form's initial values.
   */

} as const)
export type HeadlessFieldInputProps = ExtractPropTypes<
  typeof headlessFieldInputProps
>
export type HeadlessFieldInputPropsPublic = __ExtractPublicPropTypes<
  typeof headlessFieldInputProps
>

export const headlessFieldInputEmits = {}
export type HeadlessFieldInputEmits = typeof headlessFieldInputEmits
