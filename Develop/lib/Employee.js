const inquirer = require('inquirer');


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
    getName() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?"
            }
        ]).then(answers => {
            this.name = answers.name;
            this.getId();
        })
    }

    getId() {
        return inquirer.prompt([
            {
                type: 'number',
                name: 'id',
                message: "What is the employee's ID?"
            }
        ]).then(answers => {
            this.id = answers.id;
            this.getEmail();
        })
    }

    getEmail() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'email',
                message: "What is the employee's email?"
            }
        ]).then(answers => {
            this.email = answers.email;
            this.getRole();
        })
    }

    getRole() {
        this.role = 'employee'
        console.log(this)
    }
}









const e = new Employee();
e.getName();
module.exports = Employee;