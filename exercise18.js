const fs = require('fs');

const validate = (obj) => {
  if (dataStudents.some((student) => student.id === obj.id)) {
    console.log("ID must be unique");
    return false;
  }
  if (obj.name.length < 2) {
    console.log("Name must be at least 2 characters");
    return false;
  }
};

const create = (obj) => {
    if (!validate(obj)) return;
    dataStudents.push(obj);

};

const update = (id, obj) => {
    if (!validate(obj)) return;
    dataStudents[dataStudents.findIndex((student) => student.id === id)] = obj;
};

const deleteStudent = (id) => {
  dataStudents = dataStudents.filter((student) => student.id !== id);
};

const findById = (id) => {
  return dataStudents.find((student) => student.id === id);
};



const dataStudents = JSON.parse(readFileSync("./students.json"));

create({
  id: 10,
  name: "Thanh",
  age: "28",
  type: "GOOD",
  balance: 6867,
  subjects: ["math", "physic", "chemistry"],
});

writeFileSync("./students.json", JSON.stringify(dataStudents));