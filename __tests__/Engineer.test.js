const Engineer = require('../lib/Engineer');

// test("creates engineer's github username attribute", () =>{
//     const github = '';
//     const employee = new Employee();
//         expect(employee.getGithub()).toBe(typeof String);
// }) 

test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const engineer = new Engineer("Bud", 1, "examp@le.com", testValue);
    expect(engineer.github).toBe(testValue);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const engineer = new Engineer("Bud", 1, "examp@le.com", "GitHubUser");
    expect(engineer.getRole()).toBe(testValue);
  });
  
  test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const engineer = new Engineer("Bud", 1, "examp@le.com", testValue);
    expect(engineer.getGithub()).toBe(testValue);
  });