import { mount } from '@vue/test-utils'
import QuestionText from '../index.vue'

describe('QuestionText component', () => {
  it('should render "What planet was  born on?" when no pass any argument', () => {
    const wrapper = mount(QuestionText)

    expect(wrapper.text()).toBe('What planet was  born on?')
  })

  it('should render "What planet was Luke Skywalker born on?" when pass the Luke Skywalker as person', () => {
    const wrapper = mount(QuestionText, {
      propsData: {
        person: 'Luke Skywalker'
      }
    })
    expect(wrapper.text()).toBe('What planet was Luke Skywalker born on?')
  })
})
