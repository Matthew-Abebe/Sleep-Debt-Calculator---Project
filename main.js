const getSleepHours = (day) => {
    switch(day) {
      case 'monday':
        return 8
        break;
      case 'tuesday':
        return 7
        break;
      case 'wednesday':
        return 8
        break;
      case 'thursday':
        return 6
        break;
      case 'friday':
        return 4
        break;
      case 'saturday':
        return 5
        break;
      case 'sunday':
        return 12
        break;
      default:
        'Error!'
    }
  };
  
  const getActualSleepHours = () =>
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  
  const getIdealSleepHours = () => {
    const idealHours = 8
    return idealHours * 7; 
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You have slept perfectly!')
  } 
  else if
    (actualSleepHours > idealSleepHours) {
      console.log('You have slept ' + (actualSleepHours - idealSleepHours) + ' hour(s) too much! Get active! ')
  }
  else if
    (actualSleepHours < idealSleepHours) {
      console.log('You have ' + (idealSleepHours - actualSleepHours) + ' hour(s) sleep debt! Get some rest!')
  }
  else {
    console.log('Error! Check your code!')
      }
  }
  
  calculateSleepDebt();
  