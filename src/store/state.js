export default {
  personsData: {
    totalCount: 0,
    people: []
  },
  planetsData: {
    totalCount: 0,
    planets: []
  },
  loadingPersons: false,
  loadingPlanets: false,
  hasPersonError: false,
  hasPlanetError: false,
  currentQuestion: {},
  steps: [],
  maxStep: 10,
  isRunning: false,
  timer: 0
}
