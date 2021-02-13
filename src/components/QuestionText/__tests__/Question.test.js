import { mount } from '@vue/test-utils'
import QuestionText from '../index.vue'

describe('Test QuestionText component with nothing argument', () => {
  const wrapper = mount(QuestionText)

  test('should be the person prop with a empty string', () => {
    expect(wrapper.props('person')).toBe('')
  })

  test('should be "What planet was  born on?"', () => {
    expect(wrapper.text()).toBe('What planet was  born on?')
  })
})

describe('Test QuestionText component with Luke Skywalker person argument', () => {
  test('the person prop should be Luke Skywalker', () => {
    const wrapper = mount(QuestionText, {
      propsData: {
        person: 'Luke Skywalker'
      }
    })
    expect(wrapper.props('person')).toBe('Luke Skywalker')
  })

  test('should be "What planet was Luke Skywalker born on?"', () => {
    const wrapper = mount(QuestionText, {
      propsData: {
        person: 'Luke Skywalker'
      }
    })
    expect(wrapper.text()).toBe('What planet was Luke Skywalker born on?')
  })
})
