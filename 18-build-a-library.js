/*
Project name: Build a Library
Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in 
dire need of your help. They’re still using index cards to organize their content! Yikes.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this 
project you will create a parent class named Media with three subclasses: Book, Movie, 
and CD. These three subclasses have the following properties and methods:

**Book**
Properties: 
  author (string), 
  title (string), 
  pages (number), 
  isCheckedOut (boolean, initially false), and 
  ratings (array, initially empty)
  
Getters: 
  all properties have a getter
Methods:
  .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
  
  Movie
  Properties: 
  director (string), 
  title (string), 
  runTime (number), 
  isCheckedOut (boolean, initially false), and 
  ratings (array, initially empty)
  
Getters: 
  all properties have a getter
Methods: 
  .getAverageRating(), 
  .toggleCheckOutStatus(), and 
  .addRating()
  
CD
  Properties: 
  artist (string), 
  title (string), 
  isCheckedOut (boolean, initially false), and 
  ratings (array, initially empty), songs (array of strings)
Getters: 
  all properties have a getter
  
Methods: 
  .getAverageRating(), 
  .toggleCheckOutStatus(), and 
  .addRating()
*/

/**
 * Write a class, Media, according to the specifications above.
 */
class Media{
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }
  
  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    const sum = this._ratings.reduce((a, b) => a + b, 0);
    const avg = (sum / this._ratings.length) || 0;

    return avg
  }

  addRating(newRating) {
    this._ratings.push(newRating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}


class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

// create Book instance for A Short History of Nearly Everything
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

// call .toggleCheckOutStatus() method on it
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

// add ratings and get average
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());


// create Movie instance for Jan de Bont
const speed = new Movie('Jan de Bont', 'Speed', 116);

// call .toggleCheckOutStatus() method on it
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut);

// add ratings and get average
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
