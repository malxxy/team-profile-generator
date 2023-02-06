const Inquire = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const generateTeamProfile = require('./lib/generateTeamProfile');

const homeQuestions = [
    {
      type: 'input',
      message: 'What is the Team Manager name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the employee ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the office number?',
      name: 'officeNumber',
    }
  ]

const additionalQs = [
    {
        type: 'list',
        choices: ['Add an engineer','Add an intern','Finish building the team'],
        message: 'What would you like to do next?',
        name: 'additionalQs',
    }  
]

const addEngineer = [
    {
        type: 'input',
        message: 'What is their name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is their email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is their GitHub username?',
        name: 'github',
      }
]

const addIntern = [
    {
        type: 'input',
        message: 'What is their name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What school does the intern attend?',
        name: 'school',
    }
]
  
  
// Function to write the html file
function writeToFile(readMe, data) {
    return fs.writeFileSync(path.join(process.cwd(),readMe),data)
    };
  
// Function to initialize app 
  function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      writeToFile('myTeam.html',generateTeamProfile(inquirerResponses));
    });
    }
  
  // Call initialization
  init();