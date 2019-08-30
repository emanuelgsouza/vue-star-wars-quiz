/**
 * @method
 * @param  {Number} maxNumber
 * @return {Number}           between 0 and maxNumber
 */
const getRandomNumber = maxNumber => {
  return Math.floor(Math.random() * maxNumber)
}

export default getRandomNumber
