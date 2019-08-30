import { get } from 'lodash-es'
import getRandomNumber from './get-random-number'
import getPlanetsToQuiz from './get-planets-to-quiz'

/**
 * @method factoryQuestion
 * @param  {Number} step          current step
 * @param  {Object} personsData
 * @param  {Array<String>} planetsAvailable
 * @return {Object}
 */
const factoryQuestion = (step, personsData, planetsAvailable) => {
  const randomUser = getRandomNumber(personsData.length)
  const person = personsData[randomUser]
  const homeworld = get(person, 'homeworld.name', '')
  const planets = getPlanetsToQuiz(planetsAvailable, homeworld)

  return {
    step,
    person: person.name,
    homeworld,
    timer: 0, // (milissegundos)
    planets: planets.map(planet => ({ value: planet, label: planet })),
    selected: null,
    has_success: false
  }
}

export default factoryQuestion
