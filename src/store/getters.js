import { map, filter } from 'lodash-es'

export const loadingData = ({ loadingPlanets, loadingPersons }) => {
  return loadingPlanets || loadingPersons
}

export const hasErrors = ({ hasPlanetError, hasPersonError }) => {
  return hasPlanetError || hasPersonError
}

export const usedCharacters = ({ steps }) => {
  return map(steps, 'person')
}

export const usersAvailable = ({ personsData }, { usedCharacters }) => {
  return filter(personsData.people, person => {
    const { name } = person

    return !usedCharacters.includes(name)
  })
}

export const planetsAvailable = ({ planetsData }) => {
  return map(planetsData.planets || [], 'name')
}

export const hasSuccessSize = ({ steps }) => {
  return steps.reduce((acc, step) => {
    acc += step.has_success ? 1 : 0
    return acc
  }, 0)
}

export const isFinishedQuiz = ({ steps = [], maxStep = 10 }) => {
  return steps.length === maxStep
}
