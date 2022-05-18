import { mount } from '@vue/test-utils'
import QuestionOptions from '..'
import QuestionOptionsItem from '../QuestionOptionsItem.vue'

const OPTIONS = [
  { value: 'Ryloth', label: 'Ryloth' },
  { value: 'Malastare', label: 'Malastare' },
  { value: 'Eriadu', label: 'Eriadu' },
  { value: 'Rodia', label: 'Rodia' },
  { value: 'Endor', label: 'Endor' }
]

describe('QuestionOptions component', () => {
  it('should render the corresponding items', () => {
    const wrapper = mount(QuestionOptions, {
      props: {
        options: OPTIONS,
        value: ''
      }
    })

    expect(wrapper.findAllComponents(QuestionOptionsItem)).toHaveLength(5)
  })

  it('should emit the input value when click on the second item', async () => {
    const wrapper = mount(QuestionOptions, {
      props: {
        options: OPTIONS,
        value: ''
      }
    })

    const secondElement = wrapper.findAllComponents(QuestionOptionsItem).at(1)

    await secondElement.find('input').trigger('input')

    expect(wrapper.emitted('input')[0]).toEqual(['Malastare'])
  })

  it('should pass to item component the selected value', async () => {
    const wrapper = mount(QuestionOptions, {
      props: {
        options: OPTIONS,
        value: 'Endor'
      }
    })

    const secondElement = wrapper.findAllComponents(QuestionOptionsItem).at(4)

    expect(secondElement.vm.isSelected).toBe(true)
  })

  it('should render nothing with an empty options', async () => {
    const wrapper = mount(QuestionOptions)

    expect(wrapper.findAllComponents(QuestionOptionsItem)).toHaveLength(0)
  })
})
