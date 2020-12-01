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
    }])
    .then(function({name, id, email, role}){
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub username";
        } else if (role === "Intern") {
            roleInfo = "school name";
        }else{
            roleInfo = "office phone number"
        }
            inquirer.prompt([
            {   
                type: 'input',
                name: 'roleInfo',
                message: `Enter team member's ${roleInfo}`

            },
            // {   
            //     name: 'newMember',
            //     type: 'list',
            //     message: "Would you like to add more members to your team?",
            //     choices: [
            //         "YES",
            //         "NO"
            //     ]
            
            // },
        ])

    }
}