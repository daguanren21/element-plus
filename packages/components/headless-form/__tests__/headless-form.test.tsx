import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import HeadlessForm from '../src/headless-form.vue'

const AXIOM = 'Rem is the best girl'

describe('HeadlessForm.vue', () => {
  test('render test', () => {
    const wrapper = mount(HeadlessForm, {
      slots: {
        default: AXIOM,
      },
    })

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
