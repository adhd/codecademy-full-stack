/*
Project name: Mixed Messages
JavaScript functions for random message generator.
*/

// list of random anime names
const rand1 = ['Naruto', 'Bleach', 'Treeverse', 'One Piece', 'Dragon Ball Z', 'Dragon Ball Super', 'Dragon Ball GT', 'Dragon Ball', 'Dragon Ball Kai', 'Dragon Ball AF'];

// list of random anime characters
const rand2 = ['Kakashi', 'Goku', 'Vegeta', 'Naruto', 'Sasuke', 'Luffy', 'Zoro', 'Ichigo', 'Rukia', 'Gin'];

// list of random anime quotes
const rand3 = ['The world isn\'t perfect', 'I\'m not perfect', 'I\'m not a hero', 'I\'m not a villain', 'I\'m not a good guy', 'I\'m not a bad guy', 'I\'m not a good person', 'I\'m not a bad person', 'I\'m not a good character', 'I\'m not a bad character'];

/**
 * A function, randIndexGen(), that takes in ...
 * [returns reversed array]
 * @param  [arr] arr [input array]
 * @return [num]     [output number]
 */
function randIndexGen(arr) {
  const lenArr = arr.length;
  const randIndex = Math.floor(Math.random() * lenArr);
  return randIndex;
}


/**
 * A function, displayNewText(), function selects the .dynamic-text 
 * element within the clicked card using the event.currentTarget 
 * property and the querySelector() method.
 * @param  [str] event   [input array]
 * @return 
 */

// select all elements with class "card" and store in cards
const cards = document.querySelectorAll('.card');

function displayNewText(event) {
  // 
  const dynamicText = event.currentTarget.querySelector('.dynamic-text'); 
  const dynamicHead = event.currentTarget.querySelector('.dynamic-head'); 

  const rand1Index = randIndexGen(rand1);
  const rand2Index = randIndexGen(rand2);
  const rand3Index = randIndexGen(rand3);

  const res_text = `${rand2[rand2Index]} says: ${rand3[rand3Index]}`;
  const res_head = rand3[rand3Index];
  dynamicText.textContent = res_text;
  dynamicHead.textContent = res_head;
  //document.getElementById("dynamic-text").innerHTML = res;
}

// add event listener to each card
cards.forEach(card => {
  card.addEventListener('click', displayNewText);
});
