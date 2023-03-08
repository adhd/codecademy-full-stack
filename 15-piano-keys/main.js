// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
function keyPlay(event) {
  event.target.style.backgroundColor = 'magenta';
}

function keyReturn(event) {
  event.target.style.backgroundColor = '';
}

// Write a named function with event handler properties
function noteHandler(note) {
  note.addEventListener('mousedown', keyPlay);
  note.addEventListener('mouseup', keyReturn);
}

// Write a loop that runs the array elements through the function
notes.forEach(noteHandler);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;

  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;

  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
  lastLyric.style.display = 'inline-block';

  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';
}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function() {
  startOver.hidden = false;
  nextThree.hidden = true;

  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';

  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';

  lastLyric.style.display = 'none';
}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}


/*
Hacker Effect

sets up an event listener on the mouseover event of the first h1 element found 
in the HTML document. When the mouse hovers over the h1 element, the code will 
start generating random letters, one at a time, and display them in the h1 element


*/
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

// on mouse hover, the event listener function will execute
document.querySelector("h1").onmouseover = event => {  
  let iteration = 0; // keep track of the number of letters that have been generated so far
  
  clearInterval(interval); // clears interval timer by calling clearInterval() on "interval" variable
  
  interval = setInterval(() => { // interval timer using setInterval()
    /*
    generates a new string of letters by looping through each character of the original string and 
    replacing it with either a random letter or the original character... loop continues until all 
    characters have been replaced by their original letters
    */
    event.target.innerText = event.target.innerText
      .split("") // splits the text content of the h1 element into an array of individual characters 
      .map((letter, index) => { // loop through each char & replace w/ either original char or a randomly generated letter
        if(index < iteration) {
          // if (index of curr char) < ("iteration" variable), return original char at that position
          return event.target.dataset.value[index];
        }
        // otherwise return random letter
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    // once all chars replaced by original letters, the interval timer is cleared
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    // "iteration" variable incremented by 1/3 to continue loop & generate another letter until 
    // all characters in the original text have been replaced
    iteration += 1 / 3;
  }, 30); // timer will execute the given function every 30 milliseconds until it is cleared
}