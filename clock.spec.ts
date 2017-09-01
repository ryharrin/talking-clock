import { speakTime } from './clock'
import { allTheTimes } from './times'

describe('the talking clock', () => {

  test('recognizes midnight', () => {
    const timeSpoken = speakTime()

    expect(timeSpoken).toEqual()
  })

})
