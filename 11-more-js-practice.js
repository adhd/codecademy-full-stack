/**
 * Write a function factorial() that takes a number as an argument and returns the factorial 
 * of the number. Assume only positive numbers will be given as an argument for the factorial() 
 * function.
 * 
 * @param  [num]  num      [input arg that we want the factorial of]
 * @return [num]           [factorial of output]
 */

function factorial(num) {
  if (num <= 1) {
    return 1
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(3))


/**
 * Write a function subLength() that takes 2 parameters, a string and a single character. 
 * The function should search the string for the two occurrences of the character and return 
 * the length between them including the 2 characters. If there are less than 2 or more than 
 * 2 occurrences of the character the function should return 0.
 * 
 * @param  [str]  str      [the string to search for the character]
 * @param  [str]  char     [the single character to search for in the string]
 * @return [num]           [len of substring b/t first two occurrences of the character, incl the two chars]
 */
 
 function subLength(str, char) {
  const lenStr = str.length;
  let idx1 = -1;
  let idx2 = -1;
  let count = 0;
  for (let i = 0; i < lenStr; i++) {
    const match = (str[i] == char);
    if (match) {
      if (idx1 < 0) {
        idx1 = i;
      } else if (idx2 < 0) {
        idx2 = i;
      } 
      count += 1;
    }
  }
  if (idx1 > 0 && idx2 > 0 && count == 2) {
    return (idx2 - idx1 + 1)
  } else {
    return 0
  }
}

console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0


/**
 * Write a function groceries() that takes an array of object literals of grocery items. The 
 * function should return a string with each item separated by a comma except the last two items 
 * should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are 
 * appropriate.
 * 
 * @param  [arr]  items    [array of object literals representing grocery items]
 * @return [str]           [string containing the names of the grocery items, separated by commas and the word 'and' for the last two items]
 */
 
 function groceries() {
 
 }
