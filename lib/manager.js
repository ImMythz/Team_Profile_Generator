const Employee = require('./employee.js')

// Creates a Manager constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;