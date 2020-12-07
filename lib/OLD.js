
//take info from app.js render html
const fs = require('fs');
const path = require('path');
const templateDir = path.resolve(__dirname, "../templates");
const employees = ['manager', 'intern', 'engineer'];
const cardAttribute = (template, category, value) =>{
    //find employee card parse thru info in attributes to generate code



        }
    
   
      //functions for employees
      generateIntern = (intern) => {
        let template = fs.readFileSync(path.resolve(templateDir, "intern.html"), "utf-8");
            template = cardAttribute(template, "name", intern.getName());
            template = cardAttribute(template, "role", intern.getRole());
            template = cardAttribute(template, "email", intern.getEmail());
            template = cardAttribute(template, "id", intern.getId());
            template = cardAttribute(template, "school", intern.getSchool());
        return template;
    } 
     generateEngineer = (engineer) => {
        let template = fs.readFileSync(path.resolve(templateDir, "engineer.html"), "utf-8");
            template = cardAttribute(template, "name", engineer.getName());
            template = cardAttribute(template, "role", engineer.getRole());
            template = cardAttribute(template, "email", engineer.getEmail());
            template = cardAttribute(template, "id", engineer.getId());
            template = cardAttribute(template, "github", engineer.getGithub());
        return template;
    };
    generateManager = (manager) =>{
        let template = fs.readFileSync(path.resolve(templateDir, "manager.html"), "utf-8");
            template = cardAttribute(template, "name", manager.getName());
            template = cardAttribute(template, "role", manager.getRole());
            template = cardAttribute(template, "email", manager.getEmail());
            template = cardAttribute(template, "id", manager.getId());
            template = cardAttribute(template, "officeNumber", manager.getOfficeNumber());
        return template;
        };
    const html = [];

    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        );
    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        );
    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))    
        );
        return generateMain(html.join("main"));
    

  

const generateMain = html =>{
    const template = fs.readFileSync(path.resolve(templateDir, "main.html"), "utf-8");
    return cardAttribute(template, "employees", html);
};

 module.exports = render;