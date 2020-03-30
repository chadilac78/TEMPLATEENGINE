const Employee = require('../lib/Employee')
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;