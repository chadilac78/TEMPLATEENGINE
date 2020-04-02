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

function init() {
    inquirer.prompt([
        {
            type: "list",
            name: "createEmployeeStatus",
            message: "Do you want to create and employee?",
            choices: ["yes", "no"]
        }
    ]).then(function (createEmployeeData) {
        if (createEmployeeData.createEmployeeStatus === "yes") {
            inquirer.prompt(questions).then(function (responseData) {
                if (responseData.role === "Engineer") {
                    inquirer.prompt(engineerQuestions).then(function (engineerData) {
                        const e = new Engineer(responseData.name, responseData.id, responseData.email, engineerData.github)
                        employees.push(e)

                        init()
                    })

                } else if (responseData.role === "Intern") {
                    inquirer.prompt(internQuestions).then(function (internData) {
                        const e = new Intern(responseData.name, responseData.id, responseData.email, internData.school)
                        employees.push(e)

                        init()

                    })

                } else if (responseData.role === "Manager") {
                    inquirer.prompt(managerQuestions).then(function (managerData) {
                        const e = new Manager(responseData.name, responseData.id, responseData.email, managerData.officenumber)
                        employees.push(e)

                        init()

                    })

                }


            })


        } else {
            console.log(employees)

            exit(employees)
        }

    })

    function exit(employees) {
        fs.writeFile(outputpath, render(employees), function (err) {
            if (err) return console.log(err);

        })


    }
}







init();


