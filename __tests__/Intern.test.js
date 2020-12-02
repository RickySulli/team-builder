const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const school = "UT";
  const intern = new Intern("Bud", 1, "examp@le.com", school);
  expect(intern.school).toBe(school);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const intern = new Intern("Bud", 1, "examp@le.com", "UT");
  expect(intern.getRole()).toBe(testValue);
});

test("Can get school via getSchool", () => {
  const school = "UT";
  const intern = new Intern("Bud", 1, "examp@le.com", school);

  expect(intern.getSchool()).toBe(school);
});