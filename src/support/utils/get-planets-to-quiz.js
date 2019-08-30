import getRandomNumber from './get-random-number'

/**
 * @method getPlanetsQuiz
 * @param  {Array<String>} planetsAvailable
 * @param  {String}        currentWorld
 * @return {Array<String>}                  [ currentWorld, ... ]
 */
const getPlanetsQuiz = (planetsAvailable, currentWorld) => {
  const planets = planetsAvailable.filter(planet => planet !== currentWorld)
  const data = []

  for (let x = 0; x < 4; x++) {
    const random = getRandomNumber(planets.length)
    data.push(planets[random] || '')
  }

  return [
    currentWorld,
    ...data
  ]
}

export default getPlanetsQuiz
