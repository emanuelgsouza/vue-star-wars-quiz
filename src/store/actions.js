import { get } from 'lodash-es'
import * as TYPES from './mutation-types'
import initialState from './state'
import { loadPeopleQuery, loadPlanetsQuery } from '../support/services'
import { factoryQuestion } from '../support/utils'

export const loadPersons = async ({ commit }) => {
  commit(TYPES.SET_LOADING_PERSON, true)
  commit(TYPES.SET_PERSON_ERROR, false)

  try {
    const personsData = await loadPeopleQuery()
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

export const resetQuiz = ({ commit }) => {
  commit(TYPES.SET_CURRENT_QUESTION, initialState.currentQuestion)
  commit(TYPES.SET_STEPS, [])
  commit(TYPES.SET_TIMER, 0)
}

export const moveToNextQuestion = ({ dispatch, state, commit }) => {
  const { currentQuestion, timer, steps } = state
  const { homeworld, selected } = currentQuestion
  const isMatch = homeworld === selected

  const data = {
    ...currentQuestion,
    has_success: isMatch,
    timer
  }

  commit(TYPES.SET_CURRENT_QUESTION, data)
  commit(TYPES.SET_STEPS, [ ...steps, data ])

  dispatch('createQuestion')
}

export const createQuestion = ({ state, getters, commit }) => {
  const { planetsAvailable } = getters
  const { steps } = state
  const personsData = get(state, 'personsData.people', [])
  const data = factoryQuestion(steps.length, personsData, planetsAvailable)

  commit(TYPES.SET_TIMER, 0)
  commit(TYPES.SET_CURRENT_QUESTION, data)

  return Promise.resolve(data)
}

export const initializeQuiz = ({ dispatch }) => {
  return dispatch('resetQuiz')
    .then(() => dispatch('createQuestion'))
}
