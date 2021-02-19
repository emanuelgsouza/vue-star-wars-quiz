import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'

import Score from '..'
import Steps from '../../Steps'
import Result from '../Result.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const factoryComponent = (localStore = {}) => {
  const defaultStore = {
    state: {
      maxStep: 10
    },
    getters: {
      hasSuccessSize: () => 2
    }
  }

  const store = new Vuex.Store({
    ...defaultStore,
    ...localStore
  })

  return mount(Score, {
    localVue,
    store
  })
}

describe('Score component', () => {
  it('should render a button and emit the start event', async () => {
    const wrapper = factoryComponent()

    const button = wrapper.find('[data-testid="start-button"]')

    await button.trigger('click')

    expect(wrapper.emitted('start')).toBeDefined()
  })

  it('should have the Steps component with correct values', () => {
    const wrapper = factoryComponent()

    const stepsComponent = wrapper.findComponent(Steps)

    expect(stepsComponent.text()).toBe('2/10')
  })

  it('should have the Result component with correct values', () => {
    const wrapper = factoryComponent()

    const resultComponent = wrapper.findComponent(Result)

    expect(resultComponent.text()).toBe('Not this time 😩')
  })
})
