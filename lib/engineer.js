const Employee = require('./employee');

// Creates an Engineer constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    role() {
        return 'Engineer';
    }
    github() {
        return this.github;
    }
}

module.exports = Engineer;