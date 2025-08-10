import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

export const headlessFormProps = buildProps({} as const)
export type HeadlessFormProps = ExtractPropTypes<typeof headlessFormProps>
export type HeadlessFormPropsPublic = __ExtractPublicPropTypes<
  typeof headlessFormProps
>

export const headlessFormEmits = {}
export type HeadlessFormEmits = typeof headlessFormEmits
