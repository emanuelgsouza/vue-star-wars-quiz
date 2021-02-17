import { mount } from '@vue/test-utils'
import Result from '../Result.vue'

const getWrapper = hits => mount(Result, {
  propsData: {
    hits
  }
})

describe('Test Result with nothing argument', () => {
  const wrapper = mount(Result)

  test('should be "You don\'t know nothing 😋" text', () => {
    expect(wrapper.text()).toBe('You don\'t know nothing 😋')
  })
})

describe('Test Result with specific arguments', () => {
  test('Hit: 0 should be "You don\'t know nothing 😋" test', () => {
    const wrapper = getWrapper(0)
    expect(wrapper.text()).toBe('You don\'t know nothing 😋')
  })

  // max value
  test('Hit: 5 should be "Not this time 😩" text', () => {
    const value = 5
    const wrapper = getWrapper(value)
    expect(wrapper.props('hits')).toBe(value)
    expect(wrapper.text()).toBe('Not this time 😩')
  })

  // min value to previous category
  test('Hit: 6 should be "Almost there 😀" text', () => {
    const value = 6
    const wrapper = getWrapper(value)
    expect(wrapper.props('hits')).toBe(value)
    expect(wrapper.text()).toBe('Almost there 😀')
  })

  // max value
  test('Hit: 7 should be "Almost there 😀" text', () => {
    const value = 7
    const wrapper = getWrapper(value)
    expect(wrapper.props('hits')).toBe(value)
    expect(wrapper.text()).toBe('Almost there 😀')
  })

  // min value to previous category
  test('Hit: 8 should be "Glorious 😍" text', () => {
    const value = 8
    const wrapper = getWrapper(value)
    expect(wrapper.props('hits')).toBe(value)
    expect(wrapper.text()).toBe('Glorious 😍')
  })

  test('Hit: 10 should be "Glorious 😍" text', () => {
    const value = 10
    const wrapper = getWrapper(value)
    expect(wrapper.props('hits')).toBe(value)
    expect(wrapper.text()).toBe('Glorious 😍')
  })
})
