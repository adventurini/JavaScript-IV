// CODE here for your Lambda Classes
//first commit

class Person {
  constructor(things) {
    this.name = things.name;
    this.location = things.location;
    this.age = things.age;
    this.gender = things.gender;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`)
  }
}

class Instructor extends Person {
  constructor(stuff) {
    super(stuff);
    this.speciality = stuff.specialty;
    this.favLanguage = stuff.favLanguage;
    this.catchPhrase = stuff.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we learn about ${subject}`)
  }
  grade(student) {
    while (student.grade < 70) {
      student.grade += Math.floor(Math.random() * 30) - 10;
      console.log(student.grade);
    }
  }

}

class Student extends Person {
  constructor(tools) {
    super(tools);
    this.previousBackground = tools.previousBackground;
    this.className = tools.className;
    this.favSubjects = tools.favSubjects;
    this.grade = tools.grade;
  }
  listsSubjects() {
    console.log(`${this.favSubjects}`)
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`)
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
  }
  graduate() {
    if (this.grade >= 70) {
      console.log(`${this.name} graduates from Lambda!`)
    }
  }
}

class ProjectManagers extends Instructor {
  constructor(atts) {
    super(atts);
    this.gradClassName = atts.gradClassName;
    this.favInstructor = atts.favInstructor;
  }
  standup(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standup times!`)
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}



const anthony = new Person({
  name: 'Anthony',
  location: 'Detroit',
  age: 33,
  gender: 'male'
});

const jack = new Person({
  name: 'Jack',
  location: 'Plymouth',
  age: 23,
  gender: 'male'
});

const jeff = new Person({
  name: 'Jeff',
  location: 'Clair',
  age: 53,
  gender: 'male'
});

const mary = new Instructor({
  name: 'Mary',
  location: 'Shelby',
  age: 57,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget your aunt`
});

const john = new Instructor({
  name: 'John',
  location: 'San Fransisco',
  age: 37,
  gender: 'male',
  favLanguage: 'Java',
  specialty: 'Back-end',
  catchPhrase: `It could happen`
});

const peggy = new Instructor({
  name: 'Peggy',
  location: 'Sterling Heights',
  age: 55,
  gender: 'female',
  favLanguage: 'Python',
  specialty: 'UI',
  catchPhrase: `To the clouds`
});

const carmella = new Student({
  name: 'Carmella',
  location: 'Shelby',
  age: 24,
  gender: 'female',
  previousBackground: 'waitress',
  className: 'WEB15',
  favSubjects: ['Math', 'Science'],
  grade: 50
});

const andrew = new Student({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  previousBackground: 'student',
  className: 'WEB16',
  favSubjects: ['Political Science', 'History'],
  grade: 25
});

const vincent = new Student({
  name: 'Vincent',
  location: 'Royal Oak',
  age: 28,
  gender: 'male',
  previousBackground: 'Sales',
  className: 'WEB17',
  favSubjects: ['Science', 'Math'],
  grade: 35
});
const ashley = new ProjectManagers({
  name: 'Ashley',
  location: 'San Fransisco',
  age: 36,
  gender: 'female',
  favLanguage: 'Python',
  specialty: 'UI',
  catchPhrase: `To the clouds`,
  gradClassName: 'CS1',
  favInstructor: 'Peggy',
});

const christina = new ProjectManagers({
  name: 'Christina',
  location: 'West Branch',
  age: 30,
  gender: 'female',
  favLanguage: 'English',
  specialty: 'Front-End',
  catchPhrase: `I am the best`,
  gradClassName: 'CS2',
  favInstructor: 'John',
});

vincent.listsSubjects();
christina.standup('web17');
console.log(ashley.name)
console.log(mary.age);
console.log(vincent.grade);
peggy.grade(vincent);
console.log(vincent.grade);
vincent.graduate();