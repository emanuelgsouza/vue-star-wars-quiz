export const loadingData = ({ loadingPlanets, loadingPersons }) => {
  return loadingPlanets || loadingPersons
}

export const hasErrors = ({ hasPlanetError, hasPersonError }) => {
  return hasPlanetError || hasPersonError
}
