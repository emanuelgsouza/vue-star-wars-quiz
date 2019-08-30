import data from '../data/data.json'

export const loadPeopleQuery = () => {
  return Promise.resolve(data.peopleData || {})
}

export const loadPlanetsQuery = () => {
  return Promise.resolve(data.planetsData || {})
}
