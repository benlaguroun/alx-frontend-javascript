export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);
  let employees = [];

  for (let dept of departments) {
    employees.push(...dept);
  }

  let currentIndex = 0;

  return {
    next() {
      return currentIndex < employees.length ?
        { value: employees[currentIndex++], done: false } :
        { done: true };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}

