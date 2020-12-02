const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const fs = require()

//make functions to elimitate repetitive if statements
let validateInput = value =>{
    if (value != "") {
        return true;
    }else{
        return "Please answer the question.";
    }
}
let validateEmail = value =>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))
        {return true
        }else{
            return "This email address is invalid!";
        }
}
const employees = [];

function initApp(){
    addMember();
}
function addMember() {
inquirer
    .prompt([
    {
        type:'input',
        name: 'name',
        message: "What is the employee's name?",
        validate: validateInput
    },
    {
        type: 'number',
        name: 'id',
        message: "What is the employee's id?",
        validate: validateInput

    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?",
        validate: validateInput
    },
    {
        type:'list',
        name:'role',
        message: "What is the employee's role?",
        choices: [
            "Intern",
            "Manager",
            "Engineer"
        ],
        validate: validateInput
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        when: (answers) => answers.role === 'Engineer'
    },
    {
        type: 'number',
        name: 'officeLine',
        message: "What is your office phone number?",
        when: (answers) => answers.role === "Manager"
    },
    {
        type: 'input',
        name: 'school',
        message: "What school did you attend?",
        when: (answers) => answers.role === 'Intern'
    },
    {
        type: 'confirm',
        name: 'moreEmployees',
        message: "Would you like to add additional employees?"
    }
])
   
}