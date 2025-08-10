import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import HeadlessFormItem from '../src/headless-form-item.vue'

const AXIOM = 'Rem is the best girl'

describe('HeadlessFormItem.vue', () => {
  test('render test', () => {
    const wrapper = mount(HeadlessFormItem, {
      slots: {
        default: AXIOM,
      },
    })

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
