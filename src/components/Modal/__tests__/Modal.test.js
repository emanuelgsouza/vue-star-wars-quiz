import { mount } from '@vue/test-utils'

import Modal from '..'

const factory = () => {
  return mount(Modal, {
    slots: {
      default: ['<p data-testid="child"> Child element </p>']
    }
  })
}

describe('Modal component', () => {
  it('should render the slot content', () => {
    const wrapper = factory()

    expect(wrapper.find('[data-testid="child"]').text()).toBe('Child element')
  })

  it('should open the modal by calling the open method', async () => {
    const wrapper = factory()

    expect(wrapper.classes('is-active')).toBe(false)

    wrapper.vm.open()

    await wrapper.vm.$nextTick()

    expect(wrapper.classes('is-active')).toBe(true)

    expect(wrapper.emitted('open')).toBeDefined()
  })

  it('should close the modal by calling the close method', async () => {
    const wrapper = factory()

    wrapper.vm.open()

    await wrapper.vm.$nextTick()

    expect(wrapper.classes('is-active')).toBe(true)

    wrapper.vm.close()

    await wrapper.vm.$nextTick()

    expect(wrapper.classes('is-active')).toBe(false)
    expect(wrapper.emitted('close')).toBeDefined()
  })

  it('should close the modal by clicking in the close button', async () => {
    const wrapper = factory()

    wrapper.vm.open()

    await wrapper.vm.$nextTick()

    expect(wrapper.classes('is-active')).toBe(true)

    await wrapper.find('[data-testid="close-modal"]').trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.classes('is-active')).toBe(false)
    expect(wrapper.emitted('close')).toBeDefined()
  })
})
