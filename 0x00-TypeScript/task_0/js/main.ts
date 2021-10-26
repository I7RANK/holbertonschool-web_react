interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Rosendo',
  lastName: 'Roselino',
  age: 20,
  location: 'Barranquilla',
};

const student2: Student = {
  firstName: 'Cristofer',
  lastName: 'Jhonson',
  age: 21,
  location: 'Bogotá',
};

const studentList = [student1, student2];

const table = document.createElement('table');

studentList.forEach(student => {
  const row = table.insertRow();
  const cellFirstName = row.insertCell();
  const cellLocation = row.insertCell();

  cellFirstName.appendChild(
    document.createTextNode(student.firstName)
  );

  cellLocation.appendChild(
    document.createTextNode(student.location)
  );
});
