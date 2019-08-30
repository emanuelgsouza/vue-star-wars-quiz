import { map } from 'lodash-es'

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
  const names = map(personsData.people || [], 'name')
  return names.filter(name => !usedCharacters.includes(name))
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
