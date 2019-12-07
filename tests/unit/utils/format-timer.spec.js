import { formatTimer } from '@/support/utils'

describe('Test formatTimer function', () => {
  test('formatTimer() should be return \'00:00\'', () => {
    expect(formatTimer()).toBe('00:00')
  })

  test('formatTimer(1) should be return \'00:01\'', () => {
    expect(formatTimer(1)).toBe('00:01')
  })

  test('formatTimer(59) should be return \'00:59\'', () => {
    expect(formatTimer(59)).toBe('00:59')
  })

  test('formatTimer(60) should be return \'01:00\'', () => {
    expect(formatTimer(60)).toBe('01:00')
  })

  test('formatTimer(61) should be return \'01:01\'', () => {
    expect(formatTimer(61)).toBe('01:01')
  })

  test('formatTimer(599) should be return \'09:59\'', () => {
    expect(formatTimer(599)).toBe('09:59')
  })

  test('formatTimer(600) should be return \'10:00\'', () => {
    expect(formatTimer(600)).toBe('10:00')
  })

  test('formatTimer(601) should be return \'10:01\'', () => {
    expect(formatTimer(601)).toBe('10:01')
  })
})
