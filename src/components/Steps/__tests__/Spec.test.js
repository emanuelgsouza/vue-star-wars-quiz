import { mount } from '@vue/test-utils'
import Steps from '../index.vue'

describe('Steps component', () => {
  describe('without any argument', () => {
    it('should be 0/0 string', () => {
      const wrapper = mount(Steps)

      expect(wrapper.text()).toMatch('0/0')
    })

    it('should be the steps and actualStep props are empty (0)', () => {
      const wrapper = mount(Steps)

      expect(wrapper.props('steps')).toBe(0)
      expect(wrapper.props('actualStep')).toBe(0)
    })
  })

  describe('with arguments', () => {
    it('should be 1/10 string when passing the 1 as step and 10 as actualStep', () => {
      const wrapper = mount(Steps, {
        propsData: {
          steps: 10,
          actualStep: 1
        }
      })

      expect(wrapper.text()).toMatch('1/10')
    })

    it('should be populate the step and actual step properties', () => {
      const wrapper = mount(Steps, {
        propsData: {
          steps: 8,
          actualStep: 4
        }
      })

      expect(wrapper.props('actualStep')).toBe(4)
      expect(wrapper.props('steps')).toBe(8)
    })
  })
})
