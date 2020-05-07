import getRandomNumber from './get-random-number'
import { shuffle } from 'lodash-es'

/**
 * @method getPlanetsQuiz
 * @param  {Array<String>} planetsAvailable
 * @param  {String}        currentWorld
 * @return {Array<String>}                  [ currentWorld, ... ]
 */
const getPlanetsQuiz = (planetsAvailable, currentWorld) => {
  let planets = planetsAvailable.filter(planet => planet !== currentWorld)
  const data = []

  for (let x = 0; x < 4; x++) {
    const random = getRandomNumber(planets.length)
    const planetSelected = planets[random] || ''
    data.push(planetSelected)
    planets = planets.filter(planet => planet !== planetSelected)
  }

  return shuffle([
    currentWorld,
    ...data
  ])
}

export default getPlanetsQuiz
