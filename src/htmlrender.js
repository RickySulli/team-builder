// const fs = require("fs");
// const App = require("../app");

// // Array to hold generated employee cards
// const employeeCards = [];

// // function to create html and hold separate employees.
// const generateHtml = (employees) => {
//   // store blocks of html
//   employees.forEach((employee) => {
//     // if officeNumber,
//     // set our name, id, email, etc
//     // set a variable to a line of html for that role
//     // if school
//     //....
//     // if github
    
//     const emp = { role: employee.getRole(), html: /* html */ }
//     // push to array
//   });
//   // use employeeCards

//   //     // console.log('employees:', employees);
//   //     const createManager = (manager) => {
//   //         return `
//   //                 
//   //             `;
//   //     };

//   //     const createEngineer = (engineer) => {
//   //         return `
//   //             `;
//   //     

//   //     const createIntern = (intern) => {
//   //         return `
//   //                
//   //             `;
//   //         };
//   //         return

//   // const team = [];

//   // team.push(employeeCards
//   //     .filter(employee => employee.getRole() === "Manager")
//   //     .map(manager => createManager(manager)).join('')
//   //     );
//   // team.push(employeeCards
//   //     .filter(employee => employee.getRole() === "Intern")
//   //     .map(intern => createIntern(intern)).join('')
//   //     );
//   // team.push(employeeCards
//   //     .filter(employee => employee.getRole() === "Engineer")
//   //     .map(engineer => createEngineer(engineer)).join('')
//   //     );
//   //     return generateHtml(team.join("main"));
//   //     team.push(employeeCards);
// };

// const employeeHtml = () => {
//   return `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
//         <title>My Team</title>
//     </head>
//     <body>
//         <main>
//             <section class='node-container'>
//                 ${employeeCards}
//             </section>
//         </main>
//     </body>
//     </html>
//     `;
// };

// module.exports = generateHtml;
