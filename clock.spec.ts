import { speakTime } from './clock'
import { allTheTimes } from './times'

describe('the talking clock', () => {

  test('recognizes midnight', () => {
    const timeSpoken = speakTime('00:00')

    expect(timeSpoken).toEqual('Midnight')
  })
  test('recognizes noon', () => {
    const timeSpoken = speakTime('12:00')

    expect(timeSpoken).toEqual('Noon')
  })

  test('recognizes one am', () => {
    const timeSpoken = speakTime('01:00')

    expect(timeSpoken).toEqual(`One o'clock in the morning`)
  })
  test('recognizes two am', () => {
    const timeSpoken = speakTime('02:00')

    expect(timeSpoken).toEqual(`Two o'clock in the morning`)
  })
  test('recognizes two oh one am', () => {
    const timeSpoken = speakTime('02:01')

    expect(timeSpoken).toEqual(`Two oh one in the morning`)
  })

})
