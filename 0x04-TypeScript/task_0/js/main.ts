// main.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Mohamed",
  lastName: "Benlaguroun",
  age: 33,
  location: "morocco",
};

const student2: Student = {
  firstName: "Ben",
  lastName: "Moha",
  age: 22,
  location: "chichaoua",
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Render the table
const renderTable = () => {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  // Iterate over the students list and append rows to the table
  studentsList.forEach((student) => {
    const row = tbody.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
};

// Call the renderTable function
renderTable();

