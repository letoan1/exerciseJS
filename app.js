const students = [
	{
	  id: 1,
	  name: "Thao",
	  age: 26,
	  subjects: ["math", "physic", "chemistry"],
	  type: "EXCELLENT",
	  balance: 10000,
	},
	{
		id: 2,
		name: "Thang",
		age: 19,
		subjects: ["math", "physic", "chemistry"],
		type: "EXCELLENT",
		balance: 20000,
	  },
	  {
		id: 3,
		name: "Toan",
		age: 20,
		subjects: ["math", "physic", "chemistry"],
		type: "GOOD",
		balance: 7000,
	  },
	  {
		id: 4,
		name: "Huy",
		age: 27,
		subjects: [ "physic", "chemistry"],
		type: "GOOD",
		balance: 7000,
	  },
	  {
		id: 5,
		name: "Hoang",
		age: 27,
		subjects: ["math", "physic", "chemistry"],
		type: " AVERAGE",
		balance: 7000,
	  },
  ];


const getNameStudent = students.map(element => element.name);
const getStudentOver25 = students.filter(element => element.age > 25);
const getStudentOver25AndGood = students.filter(element => element.age > 25 && element.type === "EXCELLENT");
const totalMoney = students.reduce((total, student) => total + student.balance, 0)
const totalMoneyOfAgeOver25 = getStudentOver25.reduce((total, student) => total + student.balance, 0)
const showNameStudent = [...getNameStudent].join('-')
const getGoodAndJoinMathStudent = students.filter(element => element.type === "EXCELLENT" && element.subjects.includes('math'))
const isEveryStudentGood = students.every(element => element.type === "EXCELLENT")
const isExistGoodStudent = students.includes(element => element.type === "GOOD")

console.log(getNameStudent)
console.log(getStudentOver25);
console.log(getStudentOver25AndGood);
console.log(totalMoney);
console.log(totalMoneyOfAgeOver25);
console.log(showNameStudent);
console.log(getGoodAndJoinMathStudent);
console.log(isEveryStudentGood);
console.log(isExistGoodStudent);
