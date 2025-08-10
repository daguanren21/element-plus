import { withInstall } from '@element-plus/utils'
import HeadlessFieldInput from './src/headless-field-input.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElHeadlessFieldInput: SFCWithInstall<typeof HeadlessFieldInput> =
  withInstall(HeadlessFieldInput)
export default ElHeadlessFieldInput

export * from './src/headless-field-input'
export type { HeadlessFieldInputInstance } from './src/instance'
