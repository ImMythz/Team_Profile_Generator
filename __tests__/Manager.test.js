const Manager = require('../lib/manager');

// Tests if an Manager class can be initialized
describe('Manager Class', () => {
    describe('Setting Data', () => {
        it('Create an object with name, id, email, and officeNumber', () => {
            const employee = new Manager('Bob', '75800', 'test@gmail.com', '555-555-5555')

            expect(employee.name).toEqual('Bob')
            expect(employee.id).toEqual('75800')
            expect(employee.email).toEqual('test@gmail.com')
            expect(employee.officeNumber).toEqual('555-555-5555')
        });
    });
});