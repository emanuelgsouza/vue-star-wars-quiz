import { mount } from '@vue/test-utils'
import QuestionOptionsItem from '../QuestionOptionsItem.vue'

describe('QuestionOptionsItem component', () => {
  const option = {
    label: 'Tatooine',
    value: 'Tatooine'
  }

  it('should be Tatooine as label and value and selected', () => {
    const wrapper = mount(QuestionOptionsItem, {
      props: {
        option,
        selected: 'Tatooine'
      }
    })

    expect(wrapper.props('option')).toEqual(option)
    expect(wrapper.vm.value).toBe('Tatooine')
    expect(wrapper.vm.label).toBe('Tatooine')
    expect(wrapper.vm.isSelected).toBe(true)
  })

  it('should be Tatooine as label and value but not selected', () => {
    const wrapper = mount(QuestionOptionsItem, {
      props: {
        option,
        selected: 'Rio de Janeiro'
      }
    })

    expect(wrapper.props('option')).toEqual(option)
    expect(wrapper.vm.value).toBe('Tatooine')
    expect(wrapper.vm.label).toBe('Tatooine')
    expect(wrapper.vm.isSelected).toBe(false)
  })

  it('should emit the input event when click on the label', async () => {
    const wrapper = mount(QuestionOptionsItem, {
      props: {
        option,
        selected: 'Rio de Janeiro'
      }
    })

    await wrapper.find('input').trigger('input')

    expect(wrapper.emitted('selected')).not.toBeUndefined()
    expect(wrapper.emitted('selected')[0]).toEqual([option])
  })

  it('should render the correct label as text', async () => {
    const wrapper = mount(QuestionOptionsItem, {
      props: {
        option,
        selected: 'Rio de Janeiro'
      }
    })

    await wrapper.find('input').trigger('input')

    expect(wrapper.text()).toBe(option.label)
  })

  describe('render without arguments', () => {
    it('should render an empty text', () => {
      const wrapper = mount(QuestionOptionsItem)

      expect(wrapper.text()).toBe('')
    })

    it('should not emit the selected event', async () => {
      const wrapper = mount(QuestionOptionsItem)

      await wrapper.trigger('click')

      expect(wrapper.emitted('selected')).toBeUndefined()
    })
  })
})
