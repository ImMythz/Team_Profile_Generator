const Intern = require('../lib/intern');

// Tests if an Intern class can be initialized
describe('Intern Class', () => {
    describe('Setting Data', () => {
        it('Create an object with name, id, email, and school', () => {
            const employee = new Intern('Bob', '75800', 'test@gmail.com', 'SMU')

            expect(employee.name).toEqual('Bob')
            expect(employee.id).toEqual('75800')
            expect(employee.email).toEqual('test@gmail.com')
            expect(employee.school).toEqual('SMU')
        });
    });
});