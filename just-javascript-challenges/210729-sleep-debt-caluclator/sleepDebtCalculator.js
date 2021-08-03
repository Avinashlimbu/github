function getSleepHours(day) {
  switch (day) {
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 6;
      break;
    case 'Wednesday':
      return 7;
      break;
    case 'Thursday':
      return 6.5;
      break;
    case 'Friday':
      return 7;
      break;
    case 'Saturday':
      return 6;
      break;
    case 'Sunday':
      return 7;
      break;
    default:
      return "Please enter a valid day!";
  }
};
//console.log(getSleepHours('Thursday'));

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');


//console.log(getActualSleepHours());

//const getIdealSleepHours = () =>{
  //const idealHours = 7;
  //return idealHours * 7;
//};

const getIdealSleepHours = idealHours => idealHours * 8

//console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log(`Congratulations! You got perfect hours of sleep. That is ${actualSleepHours} hrs`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`Maybe you are sleeping a bit too much. That is ${actualSleepHours} hrs`)
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You really need to sleep more. That is ${actualSleepHours} hrs`);
  }
};

console.log(calculateSleepDebt());
