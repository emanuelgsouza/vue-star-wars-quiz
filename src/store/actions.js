import * as TYPES from './mutation-types'
import { loadPersonsQuery, loadPlanetsQuery } from '../support/services'

export const loadPersons = async ({ commit }) => {
  commit(TYPES.SET_LOADING_PERSON, true)
  commit(TYPES.SET_PERSON_ERROR, false)

  try {
    const personsData = await loadPersonsQuery()
    commit(TYPES.SET_PERSONS, personsData)
  } catch (err) {
    commit(TYPES.SET_PERSON_ERROR, true)
    return Promise.reject(err)
  } finally {
    commit(TYPES.SET_LOADING_PERSON, false)
  }
}

export const loadPlanets = async ({ commit }) => {
  commit(TYPES.SET_LOADING_PLANET, true)
  commit(TYPES.SET_PLANET_ERROR, false)

  try {
    const planetsData = await loadPlanetsQuery()
    commit(TYPES.SET_PLANETS, planetsData)
  } catch (err) {
    commit(TYPES.SET_PLANET_ERROR, true)
    return Promise.reject(err)
  } finally {
    commit(TYPES.SET_LOADING_PLANET, false)
  }
}
