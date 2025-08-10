import { buildProps } from '@element-plus/utils'
import { ZodType } from 'zod'
import { GenericObject } from 'vee-validate'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

export type FormSchemaRuleType =
  | 'required'
  | null
  | (Record<never, never> & string)
  | ZodType

export const headlessFormProps = buildProps({
  /**
   * @description Initial values of the form.
   */
  form: {
    type: Object as unknown as () => GenericObject,
    default: () => ({}),
  },
  rules: {
    type: Object as unknown as () => Record<
      string,
      FormSchemaRuleType | FormSchemaRuleType[]
    >,
    default: () => ({}),
  },
} as const)
export type HeadlessFormProps = ExtractPropTypes<typeof headlessFormProps>
export type HeadlessFormPropsPublic = __ExtractPublicPropTypes<
  typeof headlessFormProps
>

export const headlessFormEmits = {}
export type HeadlessFormEmits = typeof headlessFormEmits
