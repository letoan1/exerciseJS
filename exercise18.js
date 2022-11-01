import * as fs from 'fs';

const validate = (obj) => {
  if(dataStudents.some(student => student.id === obj.id)) {
		console.log('ID must be unique !')
		return false
	}

	if(obj.name.length < 3) {
		console.log('Name is too short, at least 3 characters !')
		return false
	}

	if(obj.age <= 0) {
		console.log('Age must be greater than 0');
		return false
	}

	if(!['EXCELLENT', 'GOOD', 'AVERAGE'].includes(obj.type)) {
		console.log('Type must be EXCELLENT, GOOD or AVERAGE')
		return false
	}

	if(obj.balance <= 0) {
		console.log('Balance must be positive')
		return false
	}
	return true
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

const findAll = (type, page, size) => {
	if(page <= 0 || size <= 0) {
		console.log('Page and size must be greater than 0');
		return false
	}

	const startIndex = page * size - size
	const paginationStudent = [...dataStudents.slice(startIndex, startIndex + size)]

	switch (type) {
		case '':
			return paginationStudent
		case 'EXCELLENT':
			return paginationStudent.filter(student => student.type === 'EXCELLENT');
		case 'GOOD':
			return paginationStudent.filter(student => student.type === 'GOOD');
		case 'AVERAGE':
			return paginationStudent.filter(student => student.type === 'AVERAGE');
		default:
			throw new Error('Invalid' + type)
	}
}

const dataStudents = JSON.parse(fs.readFileSync("./students.json"));

fs.writeFileSync("./students.json", JSON.stringify(dataStudents));