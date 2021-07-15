const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const generateHTML = require('./src/generateHTML')

let team = []

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const initialPrompts = () => {
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
        {
            type: 'list',
            name: 'addMemeber',
            message: 'Would you like to add a team member?',
            choices: ['Engineer', 'Intern', 'I do not wish to add any more team members']
        }
    ])
    .then((answers) => {
        switch(answers.addMember) {
            case 'Engineer':
                engineerPrompts()
                break;
            case 'Intern':
                internPrompts()
                break;
            default:
                writeFileAsync('index.html', generateHTML(answers))
        }
    })
    .catch((err) => console.log(err))
}

const engineerPrompts = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers name?'
        },
        {
            type: 'input', 
            name: 'engineerId',
            message: 'What is thier employee id?'
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineers email?'
        }, 
        {
            type: 'input',
            name: 'number',
            message: 'What is their phone number?'
        },
        {
            type: 'list',
            name: 'addMemeber',
            message: 'Would you like to add another team member?',
            choices: ['Engineer', 'Intern', 'I do not wish to add any more team members']
        }
    ])
    .then((answers) => {
        switch(answers.addMember) {
            case 'Engineer':
                engineerPrompts()
                break;
            case 'Intern':
                internPrompts()
                break;
            default:
                writeFileAsync('index.html', generateHTML(answers))
        }
    })
    .catch((err) => console.log(err))
}

const init = () => {
    initialPrompts()
    .catch((err) => console.error(err));
};
  
init();


