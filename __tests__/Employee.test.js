const Employee = require('../lib/Employee');

test('creates a new employee',  () => {
    const employee = new Employee();

    expect(typeof employee).toBe('object');
});
test('creates employee email attribute',  () => {
    const email = 'examp@le.com'
    const employee = new Employee('Bud',2, email);
    expect(employee.email).toBe(email);
});
test('checks employee name',  () => {
    const name = 'bud';
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});
