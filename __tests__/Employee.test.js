const Employee = require('../lib/employee')

// Tests if an Employee class can be initialized
describe('Employee Class', () => {
    describe('Setting Data', () => {
        it('Create an object with name, id, and email', () => {
            const employee = new Employee('Bob', '75800', 'test@gmail.com')

            expect(employee.name).toEqual('Bob')
            expect(employee.id).toEqual('75800')
            expect(employee.email).toEqual('test@gmail.com')
        });
    });
});