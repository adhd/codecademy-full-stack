/*
Project name: Sleep Debt Calculator

In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt 
calculator. The program will determine the actual and ideal hours of sleep for each night of 
the last week.

Key notes:
  -> JavaScript docstrings
*/

/**
 * [returns any given night’s number of   hours of rest]
 * @param  {[str]} day [day of the week]
 * @return {[int]}     [number of hours slept during specified day]
 */
function getSleepHours(day) {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
  }
}

/**
 * [returns total hours of sleep in a week]
 * @return {[int]}     [number of hours slept during specified week]
 */
function getActualSleepHours() {
  const days = ['monday', 
                'tuesday',
                'wednesday',
                'thursday',
                'friday',
                'saturday',
                'sunday'];
  var totalSleepHours = 0;

  for (const day of days) {
    totalSleepHours += getSleepHours(day);
  }

  return totalSleepHours;
}

/**
 * [returns ideal hours of sleep in a week]
 * @return {[int]}     [ideal hours slept during a week]
 */
function getIdealSleepHours() {
  const idealHours = 8;

  return idealHours * 7;
}

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();

  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours == idealSleepHours) {
    console.log('Got perfect amount of sleep! Woohoo.');
  } else if (actualSleepHours > idealSleepHours) {
    const overHours = actualSleepHours - idealSleepHours;
    console.log(`Got ${overHours} hours more sleep than needed! Yippee.`);
  } else {
    const underHours = idealSleepHours - actualSleepHours;
    console.log(`Get some rest. You underslept by ${underHours} hours this week.`);
  }
}



console.log('saturday slept: '+ getSleepHours('saturday')); // should print the # hours assigned to tuesday

console.log('total sleep hours: ' + getActualSleepHours()) // should print the # hours for entire week

console.log('total sleep hours: ' + getIdealSleepHours()) // should print the 56 hours for entire week


calculateSleepDebt();
