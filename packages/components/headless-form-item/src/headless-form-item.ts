import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

export const headlessFormItemProps = buildProps({} as const)
export type HeadlessFormItemProps = ExtractPropTypes<
  typeof headlessFormItemProps
>
export type HeadlessFormItemPropsPublic = __ExtractPublicPropTypes<
  typeof headlessFormItemProps
>

export const headlessFormItemEmits = {}
export type HeadlessFormItemEmits = typeof headlessFormItemEmits
