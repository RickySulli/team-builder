const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const fs = require()


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

const questions = [
    
]
//inquirer