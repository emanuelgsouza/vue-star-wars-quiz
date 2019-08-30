import { mount } from '@vue/test-utils'
import QuestionItem from '@/components/QuestionOptions/item'

describe('Test QuestionItem component', () => {
  test('should be a Vue instance', () => {
    expect(mount(QuestionItem).isVueInstance()).toBe(true)
  })
})

describe('Test QuestionItem with specific option', () => {
  const option = {
    label: 'Tatooine',
    value: 'Tatooine'
  }

  test('should be Tatooine as label and value and selected', () => {
    const wrapper = mount(QuestionItem, {
      propsData: {
        option,
        selected: 'Tatooine'
      }
    })

    expect(wrapper.props('option')).toBe(option)
    expect(wrapper.vm.value).toBe('Tatooine')
    expect(wrapper.vm.label).toBe('Tatooine')
    expect(wrapper.vm.isSelected).toBe(true)
  })

  test('should be Tatooine as label and value but not selected', () => {
    const wrapper = mount(QuestionItem, {
      propsData: {
        option,
        selected: 'Rio de Janeiro'
      }
    })

    expect(wrapper.props('option')).toBe(option)
    expect(wrapper.vm.value).toBe('Tatooine')
    expect(wrapper.vm.label).toBe('Tatooine')
    expect(wrapper.vm.isSelected).toBe(false)
  })
})