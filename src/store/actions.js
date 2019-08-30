import * as TYPES from './mutation-types'
import { loadPersonsQuery, loadPlanetsQuery } from '../support/services'

export const loadPersons = async ({ commit }) => {
  commit(TYPES.SET_LOADING_PERSON, true)

  try {
    const personsData = await loadPersonsQuery()
    commit(TYPES.SET_PERSONS, personsData)
  } catch (err) {
    return Promise.reject(err)
  } finally {
    commit(TYPES.SET_LOADING_PERSON, false)
  }
}

export const loadPlanets = async ({ commit }) => {
  commit(TYPES.SET_LOADING_PLANET, true)

  try {
    const planetsData = await loadPlanetsQuery()
    commit(TYPES.SET_PLANETS, planetsData)
  } catch (err) {
    return Promise.reject(err)
  } finally {
    commit(TYPES.SET_LOADING_PLANET, false)
  }
}
