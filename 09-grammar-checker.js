/*
Project name: Grammar Checker
Tterating over arrays to gather information and improve the 
quality of a paragraph.
*/

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// console.log(storyWords);

let count = 0;
storyWords.forEach(word => {count ++});
console.log(`Total count of words before processing: ${count}.`);

// filter out all instances of unnecessaryWord
storyWords = storyWords.filter(word => { return word !== unnecessaryWord});

// correct all instances of misspelledWord
storyWords = storyWords.map(word => {return word === misspelledWord ? 'beautiful' : word});

// find index of bad word(s)
const badWordIndex = storyWords.findIndex(word => { word === badWord});
console.log(`Bad word index is ${badWordIndex}.`);

// replace bad word @ badWordIndex with something more appropriate
storyWords[badWordIndex] = 'really';

// simply the words in the story ... make sure every word is 10 characters or less
lengthCheck = storyWords.every((word) => {
  return word.length <= 10
});

console.log(`lengthCheck (10 chars or less): ${lengthCheck}`);

// access words longer than 10 characters and manually replace words with a shorter word (only one in the provided extract)

storyWords = storyWords.map(word => {(word.length > 10) ? 'glorious' : word});

console.log(storyWords.join(' '));
