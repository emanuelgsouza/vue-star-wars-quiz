import { map } from 'lodash'

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
