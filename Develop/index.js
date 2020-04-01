const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const Engineer = require("C:/Users/chadi/Desktop/TEMPLATEENGINE/Develop/lib/Engineer.js");
const Employee = require("C:/Users/chadi/Desktop/TEMPLATEENGINE/Develop/lib/Employee.js");
const Intern = require("C:/Users/chadi/Desktop/TEMPLATEENGINE/Develop/lib/Intern.js");
const Manager = require("C:/Users/chadi/Desktop/TEMPLATEENGINE/Develop/lib/Manager.js");
const render = require("C:/Users/chadi/Desktop/TEMPLATEENGINE/Develop/lib/htmlRenderer.js");

const OUTPUT_DIR = path.resolve(__dirname, "templates")
const outputpath = path.join(OUTPUT_DIR, "./Develop/templates/team.html");



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
            // perform action if no

            console.log("Thanks Goodbye")
            exit()

        }



    })

    function exit(employees) {
        fs.writeFile("./templates/team.html", render(employees), function (err) {
            if (err) return console.log(err);
            console.log("team.html file successfully created!");
        })
    }

}




init();

// const employee = async (data) => {
//     console.log(data)
//     const res = await inquirer.prompt(questions)
//     const e = new Employee(data.name, data.id, data.email)
//     employees.push(e)
//     init()
// }


// const engineer = async (data) => {
//     console.log(data)
//     const res = await inquirer.prompt(engineerQuestions)
//     const e = new Engineer(data.name, data.id, data.email, res.github)
//     employees.push(e)
//     init()
// }


// const manager = async (data) => {
//     console.log(data)
//     const res = await inquirer.prompt(managerQuestions)
//     const e = new Manager(data.name, data.id, data.email, res.officenumber)
//     employees.push(e)
//     init()
// }

// const intern = async (data) => {
//     console.log(data)
//     const res = await inquirer.prompt(internQuestions)
//     const e = new Intern(data.name, data.id, data.email, res.school)
//     employees.push(e)
//     init()
// }

// const exit = async (data) => {
//     //     render(employees.outputpath);

// }



// const init = async () => {
//     const choice = await inquirer.prompt(confirm)
//     if (!choice) {
//         const res = await inquirer.prompt(qeustions)
//         switch (res, role) {
//             case "Employee":
//                 return employee(res)
//             case 'Manager':
//                 return manager(res)
//             case 'Engineer':
//                 return engineer(res)
//             case "Intern":
//                 return intern(res)
//             default:
//                 console.log('default')
//                 break;
//         }
//     } else {
//         exit(employees)
//         console.log('choice is false')
//     }

// }

