const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const path = require('path');

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
let validatePhone = (inputtxt) => {
    let phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(inputtxt.value.match(phone)){
            return true
        }else{
            return "Enter a valid Phone Number! (XXX-XXX-XXXX)"
        }
}
//prompt user to create team manager.
const promptUser = () => {
    const createManager = () => {
        inquirer.prompt([
            {
                name: "managerName",
                type: 'input',
                message: "What is your team manager name?",
                validate: validateInput
            },
            {
                name: 'managerId',
                type: 'number',
                message: "What is your team manager ID number?",
                validate: positiveNumber
            },
            {
                name: 'managerEmail',
                type: 'input',
                message: 'What is your team manager email address?',
                validate: validateEmail
            },
            {
                name: 'officeNumber',
                type: 'input',
                message: "What's your office Number?",
                validate: validatePhone
            }
        ])
    }
}
const teamMembers = () => {
return inquirer
    .prompt([
    {
        type:'list',
        name:'role',
        message: "What is the employee's role?",
        choices: [
            "Intern",
            "Engineer"
        ],
        validate: validateInput
    },
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
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        when: (answers) => answers.role === 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: "What school did the intern attend?",
        when: (answers) => answers.role === 'Intern'
    },
    {
        type: 'confirm',
        name: 'moreEmployees',
        message: "Would you like to add additional employees?",
        default: false
    },
    {
        type: 'list',
        name: 'additionalRole',
        message: "What type of employee would you like to add?",
        when: (answers) => answers.moreEmployees === true,
        choices: [
            'Manager',
            'Engineer',
            'Intern'
        ]

    }
    ]).then(inputData=> {

    })
} 
