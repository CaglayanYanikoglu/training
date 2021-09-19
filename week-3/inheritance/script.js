class Person {
  constructor(first, last, age, gender, interests) {
    console.log('Person constructor is called');
    const lastName = last;
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}

/* let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();
// Hi! I'm Han

let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell(); */

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    console.log('Teacher constructor is called');
    const lastName = last;

    super(first, last, age, gender, interests); // call parent constructor
    // subject and grade are specific to Teacher
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}

const teacher = new Teacher('caglayan', 'yanikoglu', 26, 'male', 'math', 70);
teacher.greeting();
teacher.name.first = 'Cag';
teacher.greeting();
console.log(teacher.lastName);

