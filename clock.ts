type Time = {
  hours: number
  minutes: number
  hourString: string
  minuteString: string
  isMidnight: boolean
  isMidday: boolean
  timeOfDay: string
}

const hourStrings = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']
const minuteStrings = [`o'clock`, ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tenMinuteStrings = ['', '', 'twenty', 'thirty', 'forty', 'fifty']

const getHours = (time: string): number => {
  return parseInt(time.slice(0,2), 10)
}

const getMinutes = (time: string): number => {
  return parseInt(time.slice(3,5), 10)
}

const stringifyHours = (hours: number): string => {
  return hourStrings[hours % 12]
}

const getStandardMinuteString = (minutes: number) => {
  let tens = tenMinuteStrings[Math.floor(minutes / 10)]
  let singles = minutes % 10 === 0 ? '' : minuteStrings[minutes % 10]
  return `${tens}${singles}`
}

const stringifyMinutes = (minutes: number): string => {
  const isOver19 = minutes > 19
  const isSingleDigit = minutes < 10 && minutes > 0

  return isOver19       ? getStandardMinuteString(minutes) :
         isSingleDigit  ? `oh${minuteStrings[minutes]}` :
                          minuteStrings[minutes]
}

const getTimeOfDay = (hours: number): string => {
  return hours < 12  ? 'morning' :
         hours >= 18 ? 'evening' :
                       'afternoon'
}

const parseTimeString = (timeString: string): Time => {
  const hours = getHours(timeString)
  const minutes = getMinutes(timeString)
  const hourString = stringifyHours(hours)
  const minuteString = stringifyMinutes(minutes)
  const isMidnight = hourString === 'twelve' && minutes === 0 && hours === 0
  const isMidday = hourString === 'twelve' && minutes === 0 && hours === 12
  const timeOfDay = getTimeOfDay(hours)
  return {hours, minutes, hourString, minuteString, isMidnight, isMidday, timeOfDay}
}

const buildStandardTimeString = (time: Time): string => {
  return `${time.hourString} ${time.minuteString} in the ${time.timeOfDay}`
}

export const speakTime = (time: string): string => {
  const parsedTime = parseTimeString(time)

  return parsedTime.isMidnight ? 'midnight' :
         parsedTime.isMidday   ? 'midday' :
                                 buildStandardTimeString(parsedTime)

}
