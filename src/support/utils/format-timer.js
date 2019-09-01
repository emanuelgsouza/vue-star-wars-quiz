import { padStart, toInteger } from 'lodash-es'

const padHour = (value) => padStart(value, 2, 0)

/**
 * @method formatTimer
 * @param  {Number} timer number of seconds
 * @return {String}
 *
 * @example
 * formatTimer(1) // 00:01
 * formatTimer(60) // 01:00
 */
const formatTimer = timer => {
  const seconds = toInteger(timer)
  const result = []

  result.push(padHour(Math.floor(seconds / 60)))

  result.push(padHour(seconds % 60))

  return result.join(':')
}

export default formatTimer
