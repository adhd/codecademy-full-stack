/*
We need to create classes for primary and high schools. Because these classes share properties 
and methods, each will inherit from a parent School class. Our parent and three child classes 
have the following properties, getters, setters, and methods:

School
  Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
  Getters: all properties have getters
  Setters: the numberOfStudents property has a setter
  Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)

Primary
  Includes everything in the School class, plus one additional property
  Properties: pickupPolicy (string)

Middle
  Does not include any additional properties or methods
High
  Includes everything in the School class, plus one additional property
  Properties: sportsTeams (array of strings)
*/

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  // all properties have getters
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  // only numberOfStudents property has a setter
  set numberOfStudents(value) {
    this._numberOfStudents = value;
  }

  quickFacts() {
    const fact = `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    console.log(fact);
    return fact;
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randomIdx = Math.floor(Math.random()) * (substituteTeachers.length - 1);

    return substituteTeachers[randomIdx];
  }
}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
  }
}

class High extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents)
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

// examples for Primary school

const lhPolicy = 'Students must be picked up by a parent, guardian, or a family member over the age of 13.';
const lorraineHansbury = new Primary('Lorraine Hansbury', 514, lhPolicy);

lorraineHansbury.quickFacts();

const subArr = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
const selSub = School.pickSubstituteTeacher(subArr);
console.log(selSub);

// examples for High school
const alTeams = ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'];
const alSmith = new High('Al E. Smith', 415, alTeams);

console.log(alSmith.sportsTeams);

// examples for Middle school
