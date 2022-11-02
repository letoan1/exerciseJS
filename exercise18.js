const fs = require('fs');

const types = ['EXCELLENT', 'GOOD', 'AVERAGE']

const idAlreadyExists = (id) => {
	return students.some((student) => student.id === id);
};

const validate = (obj) => {
	if(obj.name.length < 3) {
		console.log('Name is too short, at least 3 characters !')
		return false
	}

	if(obj.age <= 0) {
		console.log('Age must be greater than 0');
		return false
	}

	if(!types.includes(obj.type)) {
		console.log('Type must be EXCELLENT, GOOD or AVERAGE')
		return false
	}

	if(obj.balance <= 0) {
		console.log('Balance must be positive')
		return false
	}
	return true
}

const create = (obj) => {
	if(students.some(student => student.id === obj.id)) {
		console.log('ID must be unique !')
		return
	}

	if(!validate(obj)) return
	students.push(obj)
}

const update = (id, obj) => {
	if(!validate(obj)) return
	if (!idAlreadyExists(id)) {
		console.log("ID does not exist");
		return;
	}
	const findIndexStudent = students.findIndex((student) => student.id === id)
	const studentUpdate = students[findIndexStudent] = obj;
	return studentUpdate
}

const deleteStudent = (id) => {
	if (!idAlreadyExists(id)) {
		console.log("ID does not exist");
		return;
	  }
	const removeStudents = students.filter(student => student.id !== id)
	return removeStudents
}

const findById = (id) => {
	if (!idAlreadyExists(id)) {
		console.log("ID does not exist");
		return;
	  }
	const findStudents = students.find((student) => student.id === id);
	return findStudents
};

const findAll = (type, page, size) => {
	if(+page <= 0 || +size <= 0) {
		console.log('Page and size must be numerical and greater than 0');
		return false
	}

	const startIndex = page * size - size
	const paginationStudent = [...students.slice(startIndex, startIndex + size)]

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


const createStudent = create({
    id: 6,
    name: "Thư",
    age: 27,
    subjects: ["math", "physic", "chemistry"],
    type: "AVERAGE",
    balance: 7000,
})

console.log(dataStudents);

fs.writeFileSync("./students.json", JSON.stringify(dataStudents));