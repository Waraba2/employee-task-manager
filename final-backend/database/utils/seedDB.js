const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstname: "Melissa",
		lastname: "Lynch",
		department: "Computer Science"
	});
	const dummyEmployee2 = await Employee.create({
		firstname: "Kim",
		lastname: "Kardashian"
	});

	const dummyTask = await Task.create({
		description: "CSCI 39548",
        prioritylevel: "C107",
        completionstatus: "W 5:35 - 8:15 PM"
	});

	await dummyTask.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;