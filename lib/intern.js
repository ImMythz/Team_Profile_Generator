const Employee = require('./employee');

// Creates an Intern constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    role() {
        return 'Intern';
    }
    school() {
        return this.school;
    }
}

module.exports = Intern;