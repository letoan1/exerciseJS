import students from './data.js'


const nameStudent = students.map(element => element.name);
const studentOver25 = students.filter(element => element.age > 25);
const studentBelow25AndGood = students.filter(element => element.age < 25 && element.type === "EXCELLENT");
const totalMoney = students.reduce((total, student) => total + student.balance, 0)
const totalMoneyOfAgeOver25 = studentOver25.reduce((total, student) => total + student.balance, 0)
const showNameStudent = [...nameStudent].join('-')
const goodAndJoinMathStudent = students.filter(element => element.type === "EXCELLENT" && element.subjects.includes('math'))
const isEveryStudentGood = students.every(element => element.type === "EXCELLENT")
const isExistGoodStudent = students.includes(element => element.type === "GOOD")

console.log(nameStudent)
console.log(studentOver25);
console.log(studentBelow25AndGood);
console.log(totalMoney);
console.log(totalMoneyOfAgeOver25);
console.log(showNameStudent);
console.log(goodAndJoinMathStudent);
console.log(isEveryStudentGood);
console.log(isExistGoodStudent);
