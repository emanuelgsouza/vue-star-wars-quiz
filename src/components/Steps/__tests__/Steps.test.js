import { mount } from '@vue/test-utils'
import Steps from '../index.vue'

describe('Steps component', () => {
  it('should render the 0/0 text when not passing any argument', () => {
    const wrapper = mount(Steps)

    expect(wrapper.text()).toMatch('0/0')
  })

  it('should render the corresponding text when passing the 1 as step and 10 as actualStep', () => {
    const wrapper = mount(Steps, {
      propsData: {
        steps: 10,
        actualStep: 1
      }
    })

    expect(wrapper.text()).toMatch('1/10')
  })
})
