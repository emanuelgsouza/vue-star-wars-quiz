import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import plugins from './plugins'
import * as actions from './actions'
import * as getters from './getters'

export const store = createStore({
  state,
  actions,
  mutations,
  plugins,
  getters
})
