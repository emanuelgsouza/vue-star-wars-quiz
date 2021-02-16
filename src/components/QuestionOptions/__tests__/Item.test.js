import { mount } from '@vue/test-utils'
import QuestionItem from '../item.vue'

describe('QuestionItem component', () => {
  const option = {
    label: 'Tatooine',
    value: 'Tatooine'
  }

  it('should be Tatooine as label and value and selected', () => {
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

  it('should be Tatooine as label and value but not selected', () => {
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

  it('should emit the input event when click on the label', async () => {
    const wrapper = mount(QuestionItem, {
      propsData: {
        option,
        selected: 'Rio de Janeiro'
      }
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('selected')).not.toBeUndefined()
    expect(wrapper.emitted('selected')[0]).toEqual([option])
  })

  it('should render the correct label as text', async () => {
    const wrapper = mount(QuestionItem, {
      propsData: {
        option,
        selected: 'Rio de Janeiro'
      }
    })

    await wrapper.trigger('click')

    expect(wrapper.text()).toBe(option.label)
  })

  describe('render without arguments', () => {
    it('should render an empty text', () => {
      const wrapper = mount(QuestionItem)

      expect(wrapper.text()).toBe('')
    })

    it('should not emit the selected event', async () => {
      const wrapper = mount(QuestionItem)

      await wrapper.trigger('click')

      expect(wrapper.emitted('selected')).toBeUndefined()
    })
  })
})
