// 1. Let's build a Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// 2. Extending the Teacher class
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// 3. Printing teachers
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => `${firstName[0]}. ${lastName}`;

// Example usage
console.log(printTeacher("John", "Doe"));

// 4. Writing a class
interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClass;
}

interface StudentInterface {
  displayName(): string;
  workOnHomework(): string;
}

class StudentClass implements StudentInterface {
  constructor(readonly firstName: string, readonly lastName: string) {}

  displayName(): string {
    return this.firstName;
  }

  workOnHomework(): string {
    return "Currently working";
  }
}

// Example usage
const student = new StudentClass("Alice", "Smith");
console.log(student.displayName());
console.log(student.workOnHomework());

