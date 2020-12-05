const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const generatePage = require('./src/htmlrender')
const validate = require('./validate')


const team = [];
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
let validateNumber = value =>{
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
            validate: validateNumber 
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
        team.push(manager)
        //console.log(team);   
    })

};

const createTeam = (teamData) => {
    //if there isn't a team array create one
    // if(!teamData.info){
    //     teamData.info =[];
    // }
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
            validate: validateInput
        }
    ])
    .then(answer => {
        if(answer.choices === 'Intern'){
            createIntern()
        }else if(answer.choices === "Engineer"){
            createEngineer()
        }else if(answer.choices === 'I am done adding employees'){
            console.log(team);
        }
    })
}
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
            validate: validateInput

        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            validate: validateInput
        },
        {
            type: 'input',
            name: 'school',
            message: "What school did the intern attend?",
        }
    ]).then(iAnswers => {
        let intern = new Intern(iAnswers.name, iAnswers.id, iAnswers.email, iAnswers.school)
            team.push(intern)
            return createTeam();
    })
};
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
            validate: validateInput
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email address?",
            validate: validateInput
        },
        {
            type: 'input',
            name: 'username',
            message: "What is the Engineer's github username?"
        }
    ]).then(eAnswers => {
        let engingeer = new Engineer(eAnswers.name, eAnswers.id, eAnswers.email, eAnswers.username)
            team.push(engineer)
            return createTeam();
    })
}

createManager()
    


  