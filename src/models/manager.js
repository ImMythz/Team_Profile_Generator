const Employee = require('./employee.js')

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