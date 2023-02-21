/*
Project name: Practice time baby
Review for JavaScript syntax, control flow, and functions.
*/

/**
 * A function that takes in one's age and returns which phase of life they are in.
 * Your function should have no parameters and return the string 'Hello, World!'.
 * 
 * [returns phase of life]
 * @param  {[str]} age [person's age]
 * @return {[str]}     [the phase of life they're in]
 */

const lifePhase = (age) => {
  if (age >= 0 && age <= 3) {
    return 'baby';
  } else if (age >= 4 && age <= 12) {
    return 'child';
  } else if (age >= 13 && age <= 19) {
    return 'teen';
  } else if (age >= 20 && age <= 64) {
    return 'adult';
  } else if (age >= 65 && age <= 140) {
    return 'senior citizen';
  } else {
    return 'This is not a valid age'
  }
}


/**
 * Write a function, finalGrade(). 
 * Take three arguments of type number, find the average of those three numbers, return the 
 * letter grade (as a string) that the average corresponds to. Return error if any of the three 
 * grades are less than 0 or greater than 100.
 * 
 * [returns finalGrade]
 * @return {[str]}     [final grade in the course]
 */

function finalGrade(num1, num2, num3) {
  avgGrade = (num1 + num2 + num3) / 3;

  if (num1 < 0 || num2 < 0 || num3 < 0 || 
  num1 > 100 || num2 > 100 || num3 > 100) {
    return 'You have entered an invalid grade.';
  }

  if (avgGrade >= 0 && avgGrade <= 59) {
    return 'F';
  } else if (avgGrade >= 60 && avgGrade <= 69) {
    return 'D';
  } else if (avgGrade >= 70 && avgGrade <= 79) {
    return 'C';
  } else if (avgGrade >= 80 && avgGrade <= 89) {
    return 'B';
  } else if (avgGrade >= 90 && avgGrade <= 100) {
    return 'A';
  } else {
    return 'You have entered an invalid grade.';
  }
}


/**
 * Write a function, calculateWeight(). 
 * Take two arguments, earthWeight and planet, of type number, and string, respectively. Return a 
 * number representing what that Earth-weight would equate to on the planet passed in. 
 * 
 * [returns weight on specified planet]
 * @param  {[str]} earthWeight  [weight on Earth]
 * @param  {[str]} planet       [planet]
 * @return {[int]}              [new weight on specified planet]
 */

function calculateWeight(earthWeight, planet) {
  switch (planet) {
    case 'Mercury':
      return earthWeight * 0.378;
      break;
    case 'Venus':
      return earthWeight * 0.907;
      break;
    case 'Mars':
      return earthWeight * 0.377;
      break;
    case 'Jupiter':
      return earthWeight * 2.360;
      break;
    case 'Saturn':
      return earthWeight * 0.916;
      break;
    default:
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
}


/**
 * Write a function, howOld(). 
 * Calculates how old someone who is currently the given age was (or will be)
 * during the given year.
 * 
 * [returns weight on specified planet]
 * @param [number] age    [the current age of the person, in years]
 * @param [number] year   [the year to calculate the person's age for]
 * @returns [string]      [a string describing the person's age during the given year]
 */

function howOld(age, year) {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;
  const calculatedAge = year - birthYear;
  
  if (year > currentYear) {
    return `You will be ${calculatedAge} in the year ${year}`;
  } else if (year < birthYear) {
    const yearsBeforeBirth = birthYear - year;
    return `The year ${year} was ${yearsBeforeBirth} years before you were born`;
  } else {
    return `You were ${calculatedAge} in the year ${year}`;
  }
}


/**
 * Write a function, tipCalculator().
 * Calculates the tip based on the quality of the service and the total cost of 
 * the meal.
 * 
 * @param   [str] serviceQuality  [quality of the service received]
 * @param   [str] totalCost       [total cost of the meal, before tip]
 * @returns [number]              [amount of tip to be added, as a dollar figure]
*/

function tipCalculator(quality, total) {
  switch (quality) {
    case 'bad':
      return total*0.05;
      break;
    case 'ok':
      return total*0.15;
      break;
    case 'good':
      return total*0.20;
      break;
    case 'excellent':
      return total*0.30;
      break;
    default:
      return total*0.18;
  }
}
