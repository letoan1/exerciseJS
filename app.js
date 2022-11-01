import dataStudents from './data.js'


const getNameStudent = dataStudents.map(element => element.name);
const getStudentOver25 = dataStudents.filter(element => element.age > 25);
const getStudentOver25AndGood = dataStudents.filter(element => element.age < 25 && element.type === "EXCELLENT");
const totalMoney = dataStudents.reduce((total, student) => total + student.balance, 0)
const totalMoneyOfAgeOver25 = getStudentOver25.reduce((total, student) => total + student.balance, 0)
const showNameStudent = [...getNameStudent].join('-')
const getGoodAndJoinMathStudent = dataStudents.filter(element => element.type === "EXCELLENT" && element.subjects.includes('math'))
const isEveryStudentGood = dataStudents.every(element => element.type === "EXCELLENT")
const isExistGoodStudent = dataStudents.includes(element => element.type === "GOOD")

console.log(getNameStudent)
console.log(getStudentOver25);
console.log(getStudentOver25AndGood);
console.log(totalMoney);
console.log(totalMoneyOfAgeOver25);
console.log(showNameStudent);
console.log(getGoodAndJoinMathStudent);
console.log(isEveryStudentGood);
console.log(isExistGoodStudent);
