
import dataStudents from './data.js'

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
}

const create = (obj) => {
	if(!validate(obj)) return
	dataStudents.push(obj)
}

const update = (obj, id) => {
	if(!validate(obj)) return
	const studentUpdate = dataStudents[dataStudents.findIndex((student) => student.id === id)] = obj;
	return studentUpdate
}

const deleteStudent = (id) => {
	const removeStudents = dataStudents.filter(student => student.id !== id)
	return removeStudents
}

const findById = (id) => {
	const findStudents = dataStudents.find((student) => student.id === id);
	return findStudents
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

create({
	id: 6,
	name: "Hihih",
	age: 26,
	subjects: ["math", "physic", "chemistry"],
	type: "GOOD",
	balance: 10000,
})

create({
	id: 7,
	name: "Hihih",
	age: 26,
	subjects: ["math", "physic", "chemistry"],
	type: "AVERAGE",
	balance: 10000,
})


findById(4)
deleteStudent(5)

const all = findAll('GOOD',1,3)
console.log(all);

console.log(dataStudents)