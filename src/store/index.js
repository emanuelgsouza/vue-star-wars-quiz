import Vue from '@vue/compat'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import plugins from './plugins'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  plugins,
  getters
})
