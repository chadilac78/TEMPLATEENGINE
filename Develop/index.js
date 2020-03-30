const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const Engineer = require("C:/Users/chadi/Desktop/TEMPLATEENGINE/Develop/lib/Engineer.js");
const Employee = require("C:/Users/chadi/Desktop/TEMPLATEENGINE/Develop/lib/Employee.js");
const Intern = require("C:/Users/chadi/Desktop/TEMPLATEENGINE/Develop/lib/Intern.js");
const Manager = require("C:/Users/chadi/Desktop/TEMPLATEENGINE/Develop/lib/Manager.js");
const render = require("C:/Users/chadi/Desktop/TEMPLATEENGINE/Develop/lib/htmlRenderer.js");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputpath = path.join(OUTPUT_DIR, "team.html");

const confirm = [
    {
        message: "add an emloyee",
        type: 'confirm',
        name: "confirm"
    }
]

const employees = [];

const questions = [
    {
        type: 'list',
        name: 'role',
        message: "role",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: 'input',
        name: 'name',
        message: "what is your name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "what is your id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "what is your email?"
    },

]

const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: 'what is your github'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'what school did you go to?'
    }
]

const managerQuestions = [
    {
        type: 'input',
        name: 'officenumber',
        message: 'what is your office number?'
    }
]

const employee = async (data) => {
    console.log(data)
    const res = await inquirer.prompt(questions)
    const e = new Employee(data.name, data.id, data.email)
    employees.push(e)
    init()
}


const engineer = async (data) => {
    console.log(data)
    const res = await inquirer.prompt(engineerQuestions)
    const e = new Engineer(data.name, data.id, data.email, res.github)
    employees.push(e)
    init()
}


const manager = async (data) => {
    console.log(data)
    const res = await inquirer.prompt(managerQuestions)
    const e = new Manager(data.name, data.id, data.email, res.officenumber)
    employees.push(e)
    init()
}

const intern = async (data) => {
    console.log(data)
    const res = await inquirer.prompt(internQuestions)
    const e = new Intern(data.name, data.id, data.email, res.school)
    employees.push(e)
    init()
}

const exit = async (data) => {
    // render(employees.outputpath);

}



const init = async () => {
    const choice = await inquirer.prompt(confirm)
    if (!choice) {
        const res = await inquirer.prompt(qeustions)
        switch (res, role) {
            case "Employee":
                return employee(res)
            case 'Manager':
                return manager(res)
            case 'Engineer':
                return engineer(res)
            case "Intern":
                return intern(res)
            default:
                console.log('default')
                break;
        }
    } else {
        exit(employees)
        console.log('choice is false')
    }

}

init();