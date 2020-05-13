import { mount } from '@vue/test-utils'
import Steps from '../../src/components/Steps'

describe('Test Steps component with nothing argument', () => {
  test('should be 0/0 string', () => {
    const wrapper = mount(Steps)
    expect(wrapper.text()).toMatch('0/0')
  })

  test('should be the steps and actualStep props are empty (0)', () => {
    const wrapper = mount(Steps)
    expect(wrapper.props('steps')).toBe(0)
    expect(wrapper.props('actualStep')).toBe(0)
  })
})

const propsData = {
  steps: 10,
  actualStep: 1
}

describe('Test Steps component with arguments 1 and 10', () => {
  const wrapper = mount(Steps, { propsData })

  test('should be 1/10 string', () => {
    expect(wrapper.text()).toMatch('1/10')
  })

  test('should be the steps 1 and actualStep 10', () => {
    expect(wrapper.props('actualStep')).toBe(1)
    expect(wrapper.props('steps')).toBe(10)
  })
})
