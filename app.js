const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
__dirname = path.resolve();
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const verify = require('./lib/verify')
const generateHtml = require('./src/htmlrender');

const employees = [];

//prompt user to create team manager.
const createManager = () => {
    inquirer.prompt([
        {
            name: "managerName",
            type: 'input',
            message: "What is your team manager name?",
            validate: verify.validateInput
        },
        {
            name: 'managerId',
            type: 'number',
            message: "What is your team manager ID number?",
            validate: verify.validateId 
        },
        {
            name: 'managerEmail',
            type: 'input',
            message: 'What is your team manager email address?',
            validate: verify.validateEmail
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: "What's your office Number?",
            validate: verify.validatePhone
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
            makeProfile(employees)
        
            //  makeProfile(employees)
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
            makeProfile(employees)
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
            validate: verify.validateInput
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the intern's id?",
            validate: verify.validateId

        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            validate: verify.validateEmail
        },
        {
            type: 'input',
            name: 'school',
            message: "What school did the intern attend?",
            validate:verify.validateInput
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
            validate: verify.validateInput
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the Engineer's id?",
            validate: verify.validateId
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email address?",
            validate: verify.validateEmail
        },
        {
            type: 'input',
            name: 'username',
            message: "What is the Engineer's github username?",
            validate: verify.validateInput
        }
        //create a new engineer object
    ]).then(eAnswers => {
        let engineer = new Engineer(eAnswers.name, eAnswers.id, eAnswers.email, eAnswers.username)
            employees.push(engineer)
        //ask if they want more employees    
            promptUser();
    })
    
}

makeProfile = () => {
    // console.log(employees)
    fs.writeFileSync(path.join(__dirname, '/dist/index.html'), generateHtml(employees), 'utf-8', (err) =>{
        if(err)
            throw err
        else {
            console.log("SUCCESS!!")
        }
    });
};

//call the first prompt
createManager()

  