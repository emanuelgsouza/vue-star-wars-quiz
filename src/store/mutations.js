import * as TYPES from './mutation-types'

export default {
  /**
   * @method setPersons
   * @param {Object} state       Vuex state
   * @param {Object} personsData { totalCount: Number, people: Array<Object> }
   */
  [TYPES.SET_PERSONS] (state, personsData) {
    state.personsData = personsData || { totalCount: 0, people: [] }
  },

  /**
   * @method setPlanets
   * @param {Object} state       Vuex state
   * @param {Object} planetsData { totalCount: Number, planets: Array<Object> }
   */
  [TYPES.SET_PLANETS] (state, planetsData) {
    state.planetsData = planetsData || { totalCount: 0, planets: [] }
  },

  /**
   * @method setLoadingPlanet
   * @param {Object}  state   Vuex state
   * @param {Boolean} loading
   */
  [TYPES.SET_LOADING_PLANET] (state, loading) {
    state.loadingPlanets = loading || false
  },

  /**
   * @method setLoadingPerson
   * @param {Object}  state   Vuex state
   * @param {Boolean} loading
   */
  [TYPES.SET_LOADING_PERSON] (state, loading) {
    state.loadingPersons = loading || false
  },

  /**
   * @method setPersonError
   * @param {Object}  state   Vuex state
   * @param {Boolean} error
   */
  [TYPES.SET_PERSON_ERROR] (state, error) {
    state.hasPersonError = error || false
  },

  /**
   * @method setPlanetError
   * @param {Object}  state   Vuex state
   * @param {Boolean} error
   */
  [TYPES.SET_PLANET_ERROR] (state, error) {
    state.hasPlanetError = error || false
  }
}
