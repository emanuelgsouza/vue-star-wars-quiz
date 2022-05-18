import { mount } from '@vue/test-utils'

import Alert from '..'

describe('Alert component', () => {
  it('should render the passed message', () => {
    const message = 'Test message'
    const wrapper = mount(Alert, {
      props: {
        message
      }
    })

    expect(wrapper.text()).toBe(message)
  })

  it('should include the warning classes by default', () => {
    const message = 'Test message'
    const wrapper = mount(Alert, {
      props: {
        message
      }
    })

    expect(wrapper.classes('bg-warning')).toBe(true)
    expect(wrapper.classes('text-white')).toBe(true)
  })

  it('should include different classes with different type', () => {
    const message = 'Test message'
    const wrapper = mount(Alert, {
      props: {
        message,
        type: 'negative'
      }
    })

    expect(wrapper.classes('bg-negative')).toBe(true)
    expect(wrapper.classes('text-white')).toBe(true)
  })
})
