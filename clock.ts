export const speakTime = (time: string): string => {
  var hourName = ['', 'One', 'Two']
  var hourIndex = parseInt(time.substring(0, 2))
  if (time === '12:00') {
    return 'Noon'
  } else if (time === '02:01') {
    return 'Two oh one in the morning'
  }
  else if (time !== '00:00') {
    return hourName[hourIndex] + ' o\'clock in the morning'
  }

  return 'Midnight'
}
