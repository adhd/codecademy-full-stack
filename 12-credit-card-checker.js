/*
Project name: Credit Card Checker
Context: The company that you work for suspects that credit card distributors have been 
mailing out cards that have invalid numbers. In this project, you have the role of a clerk 
who checks if credit cards are valid. Every other clerk currently checks using pencil and 
paper, but you’ll be optimizing the verification process using your knowledge of functions and 
loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the 
rest of your time relaxing!
*/

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Functions

/**
 * Write a function validateCred() that has a parameter of an array. The purpose of validateCred() 
 * is to return true when an array contains digits of a valid credit card number and false when 
 * it is invalid. This function should NOT mutate the values of the original array.
 * 
 * 1. Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
 * 2. As you iterate to the left, every other digit is doubled (the check digit is not doubled). 
 *    If the number is greater than 9 after doubling, subtract 9 from its value.
 * 3. Sum up all the digits in the credit card number.
 * 4. If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number 
 *    is valid, otherwise, it’s invalid.
 * 
 * @param  [arr]  arr      [array of numbers]
 * @return [str]           [return whether or not cc no is valid or invalid]
 */

function validateCred(arr) {
  const lenArr = arr.length;
  let res = 0;
  const double = true;
  let digitsProcessed = 1;

  for (let i = lenArr - 1; i >= 0; i--) {
    if (i == lenArr - 1) {
      // pass
      res += arr[lenArr - 1];
    } else {
      // increment counter
      digitsProcessed += 1;
      
      // check if we should double or not
      if (digitsProcessed % 2 == 0) {
        if (arr[i] * 2 > 9) {
          res += (arr[i] * 2 - 9);
        } else {
          res += arr[i] * 2;
        }
      } else { 
        res += arr[i];
      }
    }
  }


/**
 * Write a function findInvalidCards() that has one parameter for a nested array of credit card 
 * numbers. The role of findInvalidCards() is to check through the nested array for which numbers 
 * are invalid, and return another nested array of invalid cards.
 * 
 * @param  [arr]  arr      [array of cc numbers]
 * @return [arr]           [array of invalid cc numbers]
 */

function findInvalidCards(ccArr) {
  return ccArr.filter(e => validateCred(e) === 'invalid');
}
  
// console.log(findInvalidCards(batch));
  

/**
 * Write a function idInvalidCardCompanies() that has one parameter for a nested array of invalid 
 * numbers and returns an array of companies.
 * 
 * @param  [arr]  arr      [array of invalid cc numbers]
 * @return [arr]           [array of companies]
 */
  
function idInvalidCardCompanies(arr) {
  // initialize credit card company lookup
  let dict = new Object();
  dict[3] = 'Amex (American Express)';
  dict[4] = 'Visa';
  dict[5] = 'Mastercard';
  dict[6] = 'Discover';

  const lenArr = arr.length;
  const resArr = [];
  for (let i = 0; i < lenArr; i++) {
    const firstDigit = arr[i][0];
    const currCompany = dict[firstDigit];
    if (resArr.includes(currCompany)) {
      // pass
    } else {
      resArr.push(currCompany)
    }
  }

  return resArr;
}
  
// const invalidCards = findInvalidCards(batch);
// console.log(idInvalidCardCompanies(invalidCards));

  
/**
 * Write a function strToNumArray() that accepts a string and converts 
 * it into an array of numbers like the initially provided arrays.
 * 
 * @param  [str]  str      [input credit card number as a string]
 * @return [arr]           [array of cc number digits]
 */

function strToNumArray(str) {
  const resArr = [];
  const lenArr = str.length;
  for (let i = 0; i < lenArr; i++) {
    const digit = parseInt(str[i]);
    resArr.push(digit);
  }
  return resArr;
}

// console.log(strToNumArray('1337'));
  

/**
 * Write a function invalidToValid() that will convert invalid numbers
 * into valid numbers.
 * 
 * @param  [arr]  arr      [invalid credit card number]
 * @return [arr]           [valid credit card number]
 */

function diffToValid(arr) {
  const lenArr = arr.length;
  let res = 0;
  const double = true;
  let digitsProcessed = 1;

  for (let i = lenArr - 1; i >= 0; i--) {
    if (i == lenArr - 1) {
      // pass
      res += arr[lenArr - 1];
    } else {
      // increment counter
      digitsProcessed += 1;
      
      // check if we should double or not
      if (digitsProcessed % 2 == 0) {
        if (arr[i] * 2 > 9) {
          res += (arr[i] * 2 - 9);
        } else {
          res += arr[i] * 2;
        }
      } else { 
        res += arr[i];
      }
    }
  }
  return res % 10;
}
  
function invalidToValid(arr) {
  const lenArr = arr.length;

  // check if card number is valid already
  if (validateCred(arr) === 'valid') {
    return arr;
  } else { 
    // otherwise convert invalid to valid
    const diff = diffToValid(arr);
    let double = true;
    let lastDig = arr.slice(-1);

    let res = arr.slice(0, -1);
    
    if (arr.slice(-1) >= diff) {
      // if check digit is larger than diff, subtract diff from check, making the final cc number valid
      res.push(arr.slice(-1) - diff);
    } else {
      // otherwise, we need to modify more than just the check digit (starting from the right-most check digit, and moving towards the left)
      // diff is comprised of two components: an odd and even component
      let odd_rem = (diff % 2);
      let evn_rem = (diff - odd_rem);
      
      // reduce check digit by odd_rem
      while (lastDig - 1 >= 0 && odd_rem > 0) {
        lastDig -= 1;
        odd_rem -= 1;
      }

      // reduce check digit by evn_rem
      while (lastDig - 2 >= 0 && evn_rem > 0) {
        lastDig -= 2;
        evn_rem -= 2;
      }

      // push unmodified check digit back
      res.push(lastDig);
      
      // step through digits, going left, starting at the digit left of the check digit 
      for (let i = lenArr - 2; i >= 0; i--) {
        // check if digit needs to be doubled
        if (double) {
          // if digit to be doubled, decrement evn_rem
          while (res[i] - 1 >= 0) {
            if (res[i] != 5) {
              // decrementing a digit by 1 results in sum decremented by 2
              evn_rem -= 2;
              res[i] -= 1;
            } else {
              // pass bc changing digit from 5 to 4 has a net impact of +7 on the sum
              break;
            }
          }
        } else {
          // for digits that aren't doubled, decrement odd_rem and the digit in question
          if (odd_rem > 0 && res[i] > 0) {
            odd_rem -= 1;
            res[i] -= 1;
          }
        }
        double = !double;
      }
      //res.push(arr.slice(-1) - diff);
    }
  if (validateCred(res) == 'valid') {    
    return res;
  }  
  }
}
  
// console.log(invalidToValid(invalid1));
