const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const generateHTML = require('./src/generateHTML')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')

// Sets up an empty array for team members to be added to
let teamMembers = []

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

// Initial set of prompts for user to answer
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
            name: 'addMember',
            message: 'Would you like to add a team member',
            choices: [
                {
                    name: 'Engineer', 
                    value: 'Engineer'
                },
                {
                    name: 'Intern', 
                    value: 'Intern'
                }, 
                { 
                    name: 'I do not wish to add any more team members', 
                    value: ''
                }, 
            ]
        }
    ]).then((answers) => {
        // Creates a new Manager variable and adds it to the teamMembers array 
        // Then runs the next set of prompts based on the user selection
        const manager = new Manager (answers.name, answers.managerId, answers.email, answers.number);
        teamMembers.push(manager)
        switch(answers.addMember) {
            case 'Engineer':
                engineerPrompts()
                break;
            case 'Intern':
                internPrompts()
                break;
            default:
                writeFileAsync('dist/index.html', generateHTML(answers))
                console.log('file created')
        }
    })
    .catch((err) => console.log(err))
}
// Handles prompts realated to add an Engineer
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
            name: 'github',
            message: 'What is their GitHub username?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Would you like to add another team member?',
            choices: [
                {
                    name: 'Engineer', 
                    value: 'Engineer'
                },
                {
                    name: 'Intern', 
                    value: 'Intern'
                }, 
                { 
                    name: 'I do not wish to add any more team members', 
                    value: ''
                }, 
            ]
        }
    ]).then((answers) => {
        // Creates a new Engineer variable and adds it to the teamMembers array 
        // Then runs the next set of prompts based on the user selection
        const engineer = new Engineer (answers.name, answers.engineerId, answers.email, answers.github);
        teamMembers.push(engineer)
        switch(answers.addMember) {
            case 'Engineer':
                engineerPrompts()
                break;
            case 'Intern':
                internPrompts()
                break;
            default:
                writeFileAsync('dist/index.html', generateHTML(teamMembers))
                console.log('file created')
        }
    })
    .catch((err) => console.log(err))
}

// Handles prompts realated to add an Intern
const internPrompts = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Interns name?'
        },
        {
            type: 'input', 
            name: 'internId',
            message: 'What is thier employee id?'
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'What is the Interns email?'
        }, 
        {
            type: 'input',
            name: 'school',
            message: 'What school did they attend?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Would you like to add another team member?',
            choices: [
                {
                    name: 'Engineer', 
                    value: 'Engineer'
                },
                {
                    name: 'Intern', 
                    value: 'Intern'
                }, 
                { 
                    name: 'I do not wish to add any more team members', 
                    value: ''
                }, 
            ]
        }
    ]).then((answers) => {
        // Creates a new Intern variable and adds it to the teamMembers array 
        // Then runs the next set of prompts based on the user selection
        const intern = new Intern (answers.name, answers.internId, answers.email, answers.school);
        teamMembers.push(intern)
        switch(answers.addMember) {
            case 'Engineer':
                engineerPrompts()
                break;
            case 'Intern':
                internPrompts()
                break;
            default:
                writeFileAsync('dist/index.html', generateHTML(teamMembers))
                console.log('file created')
        }
    })
    .catch((err) => console.log(err))
}

// Initializes the first set of prompts
const init = () => {
    initialPrompts()
    .catch((err) => console.log(err))
};
  
init();


