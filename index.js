const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

let team = []

const initPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your managers name?'
        },
        {
            type: 'input', 
            name: 'managerId',
            message: 'What is thier employee id?'
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'What is your managers email?'
        }, 
        {
            type: 'input',
            name: 'number',
            message: 'What is their office number?'
        },
    ])
    .then((answers) => {

    })
 
}


