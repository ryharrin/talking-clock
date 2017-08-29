import { speakTime } from './clock'
import { allTheTimes } from './times'

describe('the talking clock', () => {

  test('recognizes midnight', () => {
    const timeSpoken = speakTime('00:00')

    expect(timeSpoken).toEqual('midnight')
  })

  xtest('knows midday is not midnight', () => {
    const timeSpoken = speakTime('12:00')

    expect(timeSpoken).toEqual('midday')
  })

  xtest('can correctly say 01:00', () => {
    const timeSpoken = speakTime('01:00')

    expect(timeSpoken).toEqual("one o'clock in the morning")
  })

  xtest('can correctly say 02:00', () => {
    const timeSpoken = speakTime('02:00')

    expect(timeSpoken).toEqual("two o'clock in the morning")
  })

  xtest('can correctly say 03:00', () => {
    const timeSpoken = speakTime('03:00')

    expect(timeSpoken).toEqual("three o'clock in the morning")
  })

  xtest('knows how to describe 8 AM', () => {
    const timeSpoken = speakTime('08:00')

    expect(timeSpoken).toEqual("eight o'clock in the morning")
  })

  xtest('can correctly say 13:00', () => {
    const timeSpoken = speakTime('13:00')

    expect(timeSpoken).toEqual("one o'clock in the afternoon")
  })

  xtest('can correctly say 14:00', () => {
    const timeSpoken = speakTime('14:00')

    expect(timeSpoken).toEqual("two o'clock in the afternoon")
  })

  xtest('can correctly say 15:00', () => {
    const timeSpoken = speakTime('15:00')

    expect(timeSpoken).toEqual("three o'clock in the afternoon")
  })

  xtest('can correctly say 18:00', () => {
    const timeSpoken = speakTime('18:00')

    expect(timeSpoken).toEqual("six o'clock in the evening")
  })

  xtest('can correctly say 01:01', () => {
    const timeSpoken = speakTime('01:01')

    expect(timeSpoken).toEqual('one oh one in the morning')
  })

  xtest('can correctly say 02:01', () => {
    const timeSpoken = speakTime('02:01')

    expect(timeSpoken).toEqual('two oh one in the morning')
  })

  xtest('can correctly say 03:01', () => {
    const timeSpoken = speakTime('03:01')

    expect(timeSpoken).toEqual('three oh one in the morning')
  })

  xtest('can correctly say 01:02', () => {
    const timeSpoken = speakTime('01:02')

    expect(timeSpoken).toEqual('one oh two in the morning')
  })

  xtest('can correctly say 00:01', () => {
    const timeSpoken = speakTime('00:01')

    expect(timeSpoken).toEqual('twelve oh one in the morning')
  })

  xtest('can correctly say 00:10', () => {
    const timeSpoken = speakTime('00:10')

    expect(timeSpoken).toEqual('twelve ten in the morning')
  })

  xtest('knows how to describe 8:10 AM', () => {
    const timeSpoken = speakTime('08:10')

    expect(timeSpoken).toEqual('eight ten in the morning')
  })
  xtest('knows how to describe 8:15 AM', () => {
    const timeSpoken = speakTime('08:15')

    expect(timeSpoken).toEqual('eight fifteen in the morning')
  })

  xtest('knows how to describe 8:20 AM', () => {
    const timeSpoken = speakTime('08:20')

    expect(timeSpoken).toEqual('eight twenty in the morning')
  })

  xtest('knows how to describe 8:30 AM', () => {
    const timeSpoken = speakTime('08:30')

    expect(timeSpoken).toEqual('eight thirty in the morning')
  })

  xtest('knows how to describe 8:55 AM', () => {
    const timeSpoken = speakTime('08:55')

    expect(timeSpoken).toEqual('eight fifty five in the morning')
  })

  xtest('can correctly say 12:01', () => {
    const timeSpoken = speakTime('12:01')

    expect(timeSpoken).toEqual('twelve oh one in the afternoon')
  })

  xtest('knows how to describe 12:15 PM', () => {
    const timeSpoken = speakTime('12:15')

    expect(timeSpoken).toEqual('twelve fifteen in the afternoon')
  })

  xtest('knows how to describe 12:01 AM', () => {
    const timeSpoken = speakTime('00:01')

    expect(timeSpoken).toEqual('twelve oh one in the morning')
  })

  xtest('knows how to describe 5:59 PM', () => {
    const timeSpoken = speakTime('17:59')

    expect(timeSpoken).toEqual('five fifty nine in the afternoon')
  })

  xtest('knows how to describe 7:30 PM', () => {
    const timeSpoken = speakTime('19:30')

    expect(timeSpoken).toEqual('seven thirty in the evening')
  })

  xtest('knows how to describe 9:01 PM', () => {
    const timeSpoken = speakTime('21:01')

    expect(timeSpoken).toEqual('nine oh one in the evening')
  })

  xtest('knows how to describe 10:15 PM', () => {
    const timeSpoken = speakTime('22:15')

    expect(timeSpoken).toEqual('ten fifteen in the evening')
  })

  xtest('knows how to describe 11 PM', () => {
    const timeSpoken = speakTime('23:00')

    expect(timeSpoken).toEqual("eleven o'clock in the evening")
  })

  xtest('knows how to describe 11:59 PM', () => {
    const timeSpoken = speakTime('23:59')

    expect(timeSpoken).toEqual('eleven fifty nine in the evening')
  })

  xtest('can speak all the minutes of the day', () => {
    const runner = () => {
      let times: string[] = []
      let hour = 0
      let minute = 0

      while (hour < 24) {
        minute = 0
        while (minute < 60) {
          let time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
          const timeSpoken = speakTime(time)
          times.push(`${timeSpoken}`)
          minute++
        }
        hour++
      }
      return times
    }
    let times = runner()
    expect(times.length).toEqual(24 * 60)
    expect(times).toEqual(allTheTimes)
  })
})
