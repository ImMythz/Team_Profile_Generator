const Employee = require('./employee.js')

// Creates a Manager constructor
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum
    }
    officeNum() {
        return this.officeNumber
    }
    role() {
        return 'Manager'
    }
}

module.exports = Manager;