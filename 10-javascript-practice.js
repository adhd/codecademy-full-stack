/*
Project name: Practice time v2 
Review for JavaScript functions.
*/

/**
 * Write a function, reverseArray(), that takes in an array as an argument and 
 * returns a new array with the elements in the reverse order.
 * [returns reversed array]
 * @param  [arr] arr [input array]
 * @return [arr]     [output array, reversed]
 */

function reverseArray(arr) {
  const arrLen = arr.length;
  const halfLen = Math.floor(arrLen / 2);

  for (let i = 0; i < halfLen; i++) {
    let temp = arr[i]
    arr[i] = arr[arrLen - 1 - i];
    arr[arrLen - 1 - i] = temp;
  }
  
  return arr;
}


/**
 * Write a function, greetAliens(), that takes in an array of strings and uses 
 * a for loop to print a greeting with each string in the array.
 * [returns greeting for each element in input array]
 * @param  [arr] arr [input array]
 * @return [str]     [alien greeting]
 */

function greetAliens(arr) {
  const arrLen = arr.length
  for (let i = 0; i <arrLen; i++) {
    arrElem = arr[i];
    console.log(`Oh powerful ${arrElem}, we humans offer our unconditional surrender!`)
  }
}


/**
 * Write a function, convertToBaby(), that takes in an array as an argument and, 
 * using a loop, returns a new array with each string in the array prepended with 'baby '.
 * [returns new array with baby animal names]
 * @param  [arr] arr [input array]
 * @return [arr]     [baby animals]
 */

function convertToBaby(arr) {
  arrLen = arr.length

  for (let i = 0; i < arrLen; i++) {
    arr[i] = 'baby ' + arr[i];
  }

  return arr;
}

/**
 * Write a function, smallestPowerOfTwo(), which calculates the smallest power of two 
 * which is greater than or equal to each element in the array, and returns a new array 
 * with each of these newly calculated elements.
 * [returns new array with smallest powers of two]
 * @param  [arr] arr [input array of numbers]
 * @return [arr]     [output array of smallest powers of two]
 */

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            let j = 1;
            while (j < number) {
                  j *= 2;
            }
            results.push(j);
      }
      return results
}

// const numbers = [5, 3, 9, 30];
// console.log(smallestPowerOfTwo(numbers)) 


/**
 * Write a function declineEverything() that takes in an array of strings and, using 
 * .forEach(), loops through each element in the array and calls politelyDecline() with 
 * each of them. The .forEach() function should apply politelyDecline() directly; it 
 * should NOT merely receive an argument function that uses politelyDecline().
 * [returns new array with smallest powers of two]
 * @param  [arr] arr [array of foods]
 * @return [arr]     [output string declining every food]
 * 
 * Next, write a function acceptEverything() that takes in an array of strings and 
 * loops through each element in the array and grudgingly accepts each of them, by 
 * logging to the console in the following format: 'Ok, I guess I will eat some [element].'
 * @param  [arr] arr [array of foods]
 * @return [str]     [output string accepting every food] 
 */

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:

function declineEverything(arr) {
 arr.forEach(politelyDecline);
}

// declineEverything(veggies)

function acceptEverything(arr) {
  arr.forEach(element => {
    console.log(`Ok, I guess I will eat some ${element}.`);
  });
}

/**
 * Write a function, shoutGreetings(), that takes in an array of strings and returns a 
 * new array. This new array should contain all the strings from the argument array but 
 * with capitalized letters and an exclamation point appended to the end: 'heya' will 
 * become 'HEYA!'
 * @param  [arr] arr [input array of strings]
 * @return [arr]     [output array of strings, ALL CAPS with '!' appended to end of each str]
 */

function shoutGreetings(arr) {
  arr = arr.map(elem => elem.toUpperCase() + '!');
  return arr;
}

// const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
// console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]


/**
 * Write a function, sortYears(), that takes in an array of years, and, using the built-in 
 * .sort() method, returns that array with the years sorted in descending order.
 * @param  [arr] arr [input array of numbers]
 * @return [arr]     [output array of numbers, sorted in desc order]
 */

function sortYears(arr) {
  return arr.sort().reverse();
}

function quickSort(arr) {
  /* quickSort takes an array arr as input and returns a sorted array. The base case 
  occurs when the length of the array <= 1, in which case the array is already sorted.

  Otherwise, the function chooses the first element of the array as the pivot and creates 
  two empty arrays (left and right) to hold the elements less than and greater than the pivot, 
  respectively. It then iterates through the rest of the array and moves each element to the 
  appropriate sub-array based on whether it is less than or greater than the pivot.

  Finally, the function recursively applies quickSort to each sub-array and combines the results 
  with the pivot to produce the final sorted array.
  
  SPREAD [SYNTAX]
  (...) is a feature in that allows an iterable (such as an array) to be expanded or "spread" into 
  individual elements. It's used to used to concatenate the sorted sub-arrays (left and right) with 
  the pivot element (pivot) into a single array that is returned from the quickSort function.


  */
  
  if (arr.length <= 1) {
    return arr; // base case
  }

  const pivot = arr[0]; // choose first element as pivot
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}


/**
 * Write a function,justCoolStuff() that takes in two arrays of strings, and, using the 
 * built-in .filter() method, returns an array with the items that are present in both arrays.
 * @param  [arr] arr1 [first input array of strings]
 * @param  [arr] arr2 [second input array of strings.]
 * @return [arr]      [array containing the common elements between arr1 and arr2]
 */

function justCoolStuff(arr1, arr2) {
  return arr1.filter(e => arr2.includes(e));
}


/**
 * Write a function isTheDinnerVegan() that takes in an array of food objects in the format:
 * {name: 'cabbage', source: 'plant' } and returns a boolean value based on whether or not 
 * every item in the array has entirely plant-based origins.
 * 
 * @param  [arr]   arr  [array of food objects in the format {name: 'cabbage', source: 'plant'}]
 * @return [bool]       [indicator - if every item in the array has entirely plant-based origins]
 */

function isTheDinnerVegan(arr) {
  let   res     = true;
  const lenArr  = arr.length;
  
  for (let i = 0; i < arr.length; i++) {
    const plant_indicator = (arr[i]['source'] === 'plant');
    res = res && plant_indicator;
  }

  return res;
}


/**
 * Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:
 * {speciesName: 'shark', numTeeth: 50 } and sorts the array in ascending order based on the 
 * average number of teeth that species possesses (numTeeth).
 * 
 * @param  [arr]  arr   [array of species objects]
 * @return [arr]        [array of species objects sorted in asc order based on avg no. of teeth]
 */

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

function sortSpeciesByTeeth(arr) {
  const lenArr = arr.length;
  
  if (lenArr <= 1) {
    return arr;
  }
  
  const p_idx = Math.floor(lenArr / 2);
  const p_val = arr[p_idx]['numTeeth'];
  const left = [];
  const right = [];

  for (let i = 0; i < lenArr; i++) {
    if (i == p_idx) {
      // pass ... also stupid/arb selection of pivot
    } else if (arr[i]['numTeeth'] < p_val) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...sortSpeciesByTeeth(left), arr[p_idx], ...sortSpeciesByTeeth(right)]
}

// console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]


/**
 * Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 
  *'keys'. If the keys are in the array, your function should return the index at which they can be 
 * found. If they’re not in the array, your function should return -1.
 * 
 * @param  [arr]  arr   [array of strings]
 * @return [num]        [index of key, or -1 if not in arr]
 */

function findMyKeys(arr) {
  const idx = arr.findIndex(e => e === 'keys');
  return idx; 
}
