const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const generatePage = require('./lib/htmlrender')


const employees = [];
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
let validatePhone = value => {
    if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)){
        return true
    }else{
        return "please enter a 10 digit phone number"
    }
}
let validateId = value =>{
   if(/^\d{6}(\s*,\s*\d{6})*$/.test(value)){
       return true
   }else{
       return "please enter a six digit number"
   }
}
//prompt user to create team manager.
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
            validate: validateId 
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
                    
    ]) .then(mAnswers => {
        let manager = new Manager(mAnswers.managerName, mAnswers.managerId, mAnswers.managerEmail, mAnswers.officeNumber)
        employees.push(manager)
        //ask if the user wants more employees
        promptUser()  
    })
};
//prompt user to see if they want to add more employees
const promptUser = () =>{
    inquirer.prompt([
        {
            name:'addEmployees',
            type: 'list',
            message: 'Would you like to add more employees?',
            choices:['YES', 'NO']
        }
    ]).then(answer =>{
        if(answer.addEmployees === 'YES'){
            createTeam()
        }else if(answer.addEmployees === 'NO'){
            const pageHTML = generatePage(employees);
            fs.writeFile('./dist/index.html', pageHTML, (err) => {
                if(err) throw new Error(err);
                console.log("Success!!");
            });
        }
    });
}
//find out what kind of team member needs to be added
const createTeam = (teamData) => {
    return inquirer
        .prompt([
        {
            type:'list',
            name:'role',
            message: "What type of employee would you like to add?",
            choices: [
                "Intern",
                "Engineer",
                "I am done adding employees"
            ],
            
        }
    ])
    .then(answer => {
        if(answer.role === "Intern"){
            createIntern()
        }else if(answer.role === "Engineer"){
            createEngineer()
        }else if(answer.role === 'I am done adding employees'){
            const pageHTML = generatePage(employees);
            fs.writeFile('./dist/index.html', pageHTML, (err) => {
                if(err) throw new Error(err);
                console.log("Success!!");
            });
        }
    });
}
//this will be the user prompt for entering info for interns
const createIntern = () => {
    inquirer .prompt([
        {
            type:'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: validateInput
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the intern's id?",
            validate: validateId

        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            validate: validateEmail
        },
        {
            type: 'input',
            name: 'school',
            message: "What school did the intern attend?",
        }
        //create a new intern object
    ]).then(iAnswers => {
        let intern = new Intern(iAnswers.name, iAnswers.id, iAnswers.email, iAnswers.school)
            employees.push(intern)
            //ask if they want more employees
            promptUser();
    })
};
//this is where the user will be prompt to enter info about Engineers
const createEngineer = () => {
    inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: "What is the Engineer's name?",
            validate: validateInput
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the Engineer's id?",
            validate: validateId
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email address?",
            validate: validateEmail
        },
        {
            type: 'input',
            name: 'username',
            message: "What is the Engineer's github username?",
            validate: validateInput
        }
        //create a new engineer object
    ]).then(eAnswers => {
        let engineer = new Engineer(eAnswers.name, eAnswers.id, eAnswers.email, eAnswers.username)
            employees.push(engineer)
        //ask if they want more employees    
            promptUser();
    })
}
//call the first prompt
createManager()

    
   


  