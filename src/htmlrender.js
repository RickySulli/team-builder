const fs = require("fs");
const App = require("../app");

// Array to hold generated employee cards
const employeeCards = [];

// function to create html and hold separate employees.
const generateHtml = (employees) => {
  let team 
 
  employees.forEach((employee) => {
 

let employeeTrait
let role= employee.getRole();

    if(role=== 'Manager'){
      employeeTrait = employee.getOfficeNumber();
    }else if(role === 'Intern'){
      employeeTrait = employee.getSchool();
    }else if (role === 'Engineer'){
      employeeTrait = employee.getGithub();
    };
    const html = `<div class="containter">
    <div class="card">
        <ul class="list-group">
            <li class="list-group-item">${employee.getName()}</li>
            <li class="list-group-item">${employee.getRole()}</li>
            <li class="list-group-item">${employee.getId()}</li>
            <li class="list-group-item">${employee.getEmail()}</li>
            <li class="list-group-item">${employeeTrait}</li>
        </ul>
    </div>
</div>
    `
    employeeCards.push(html);
  })
team = employeeCards.join('')
var boilerPlate = `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap-grid.min.css">
     <title>Your Team</title>
 </head>
 <body>
     
     <div class="container">
         <div class="row">
             <div class="team-area col-12 d-flex justify-content-center">
                 ${team}
             </div>
         </div>
     </div>
     
 </body>
 </html>
 
 `
  return boilerPlate

}  
module.exports = generateHtml;