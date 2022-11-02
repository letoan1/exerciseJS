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
	if(idAlreadyExists(obj.id)) {
		console.log('ID must be unique !')
		return
	}

	if(!validate(obj)) return
	students.push(obj)
    fs.writeFileSync("./students.json", JSON.stringify(students, null, 2));
}

const update = (id, obj) => {
	if (!idAlreadyExists(id)) {
		console.log("ID does not exist");
		return;
	}
	if(!validate(obj)) return
	const findIndexStudent = students.findIndex((student) => student.id === id)
	const studentUpdate = students[findIndexStudent] = obj;
    fs.writeFileSync("./students.json", JSON.stringify(students, null, 2));
	return studentUpdate
}

const deleteStudent = (id) => {
	if (!idAlreadyExists(id)) {
		console.log("ID does not exist");
		return;
	  }
	const removeStudents = students.filter(student => student.id !== id)
    fs.writeFileSync("./students.json", JSON.stringify(students, null, 2));
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

	switch (type) {
		case '':
			return students
		case 'EXCELLENT':
			return students.filter(student => student.type === 'EXCELLENT').slice(startIndex, startIndex + size);
		case 'GOOD':
			return students.filter(student => student.type === 'GOOD').slice(startIndex, startIndex + size);
		case 'AVERAGE':
			return students.filter(student => student.type === 'AVERAGE').slice(startIndex, startIndex + size);
		default:
			throw new Error('Invalid' + type)
	}
}

const students = JSON.parse(fs.readFileSync("./students.json"));

update(6,{
    id: 6,
    name: "Thư Hoàng",
    age: 27,
    subjects: ["math", "physic", "chemistry"],
    type: "AVERAGE",
    balance: 7000,
})

create({
    id: 7,
    name: "Lan",
    age: 19,
    subjects: ["math", "physic", "chemistry"],
    type: "GOOD",
    balance: 10000,
})

findAll('GOOD',1,3)

console.log(students);
