import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import HeadlessFieldInput from '../src/headless-field-input.vue'

const AXIOM = 'Rem is the best girl'

describe('HeadlessFieldInput.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => (
      <HeadlessFieldInput>{AXIOM}</HeadlessFieldInput>
    ))

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
