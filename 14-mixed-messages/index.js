/*
Project name: Mixed Messages
JavaScript functions for random message generator.
*/

/**
 * A function, randIndexGen(), that takes in ...
 * [returns reversed array]
 * @param  [arr] arr [input array]
 * @return [arr]     [output array]
 */
function randIndexGen(arr) {
  const lenArr = arr.length;
}


/**
 * A function, randIndexGen(), that takes in ...
 * [returns reversed array]
 * @param  [arr] arr [input array]
 * @return [arr]     [output array]
 */
function txtParser(fileName) {
  // create an empty array to store the line items
  let lines = [];

  // use the Fetch API to retrieve the text file
  fetch('example.txt')
    .then(response => response.text())
    .then(data => {
      // split the text file into an array of lines
      lines = data.split('\n');
      console.log(lines); // output the array of lines to the console
    })
    .catch(error => console.error(error));
}

