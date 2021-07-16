const Engineer = require('../lib/engineer');

// Tests if an Engineer class can be initialized
describe('Engineer Class', () => {
    describe('Setting Data', () => {
        it('Create an object with name, id, email, and github', () => {
            const employee = new Engineer('Bob', '75800', 'test@gmail.com', 'user1234')

            expect(employee.name).toEqual('Bob')
            expect(employee.id).toEqual('75800')
            expect(employee.email).toEqual('test@gmail.com')
            expect(employee.github).toEqual('user1234')
        });
    });
});