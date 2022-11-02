import students from './data.js'

const types = ['EXCELLENT', 'GOOD', 'AVERAGE']

const idAlreadyExists = (id) => {
    return students.some((student) => student.id === id);
};

const validate = (obj) => {
    if (obj.name.length < 3) {
        console.log('Name is too short, at least 3 characters !')
        return false
    }

    if (obj.age <= 0) {
        console.log('Age must be greater than 0');
        return false
    }

    if (!types.includes(obj.type)) {
        console.log('Type must be EXCELLENT, GOOD or AVERAGE')
        return false
    }

    if (obj.balance <= 0) {
        console.log('Balance must be positive')
        return false
    }
    return true
}

const create = (obj) => {
    if (idAlreadyExists(obj.id)) {
        console.log('ID must be unique !')
        return
    }

    if (!validate(obj)) return
    students.push(obj)
}

const update = (id, obj) => {
    if (!idAlreadyExists(id)) {
        console.log("ID does not exist");
        return;
    }
    if (!validate(obj)) return
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
    if (+page <= 0 || +size <= 0) {
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

create({
    id: 6,
    name: "Hung",
    age: 18,
    subjects: ["math", "chemistry"],
    type: "EXCELLENT",
    balance: 10000,
})

create({
    id: 7,
    name: "Thu",
    age: 30,
    subjects: ["math", "physic", "chemistry"],
    type: "AVERAGE",
    balance: 10000,
})

create({
    id: 8,
    name: "Lan",
    age: 30,
    subjects: ["math", "physic", "chemistry"],
    type: "GOOD",

    balance: 10000,
})
create({
    id: 9,
    name: "Lan Anh",
    age: 30,
    subjects: ["math", "physic", "chemistry"],
    type: "EXCELLENT",
    balance: 10000,
})

update(7, {
    id: 7,
    name: "Thư",
    age: 30,
    subjects: ["math", "physic", "chemistry"],
    type: "AVERAGE",
    balance: 10000,
})

findById(4)
deleteStudent(5)

const all = findAll('GOOD', 1, 3)
console.log(all);

console.log(students)