const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

test('can set office number via constructor', () => {
        const number = 1111;
        const manager = new Manager('bud', 1, 'examp@le.com', number);
        expect(manager.officeNumber).toBe(number);
})

test('getRole() should retrun "Manager"', () => {
    const getRole = "Manager";
    const manager = new Manager('bud', 1, 'examp@le.com', getRole)
    expect(manager.getRole()).toBe(getRole);
})

test('Can get office number from getOffice()', () =>{
    const officeNumber = 11111;
    const manager = new Manager('bud', 1, 'expamp@le.com', officeNumber)
    expect(manager.getOfficeNumber()).toBe(officeNumber);
})
