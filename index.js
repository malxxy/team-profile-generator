// required modules
const inquirer = require('inquirer'); // require inquirer from node modules
const Employee = require('./lib/Employee'); // require the Employee class
const Engineer = require('./lib/Engineer'); // require the Engineer class
const Intern = require('./lib/Intern'); // require the Intern class
const Manager = require('./lib/Manager'); // require the manager class
const fs = require('fs'); // require fs to write files
const generateTeamProfile = require('./lib/generateTeamProfile'); // require fucntion to generate the Team Profile

// Questions upon launching app to insert team manager info
const homeQuestions = [
    {
      type: 'input',
      message: 'What is the team manager first and last name?',
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
      message: 'What is their office number?',
      name: 'officeNumber',
    }
]

// after entering team manager info, user given 3 options
const additionalQs = [
    {
        type: 'list',
        choices: ['Add an engineer','Add an intern','Finish building the team'],
        message: 'What would you like to do next?',
        name: 'additionalQs',
    }  
]

// questions when user chooses to add an engineer to the team
const addEngineer = [
    {
        type: 'input',
        message: 'What is their first and last name?',
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

// questions when user chooses to add an intern
const addIntern = [
    {
        type: 'input',
        message: 'What is their first and last name?',
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

function addAnEngineer(responses) {
  inquirer.prompt(addEngineer).then((engineerInfo) => {
    engineer = new Engineer(engineerInfo.name,engineerInfo.id,engineerInfo.email,engineerInfo.github);
  });
};

function addAnIntern(responses) {
  inquirer.prompt(addIntern).then((internInfo) => {
    intern = new Intern(internInfo.name,internInfo.id,internInfo.email,internInfo.school);
  });
};

// Function to write the html file
function writeToFile(html, data) {
  return fs.writeFileSync((html),data)
};

// function to close app and generate HTML file, and open HTML file
function finishApp(responses) {
  console.log("Team profile generating...");
  generateTeamProfile();
  writeToFile('./dist/myTeam.html',generateTeamProfile(responses));
};

function generateTeam () {
  inquirer.prompt(homeQuestions).then((responses) => {
    teamManager = new Manager(responses.name,responses.id,responses.email,responses.officeNumber)
    .then((nextSteps) => {
      inquirer.prompt(additionalQs).then((nextSteps) => {
        if  (nextSteps === 'Add an engineer') {
          addAnEngineer();
        } else if (nextSteps === 'Add an intern') {
          addAnIntern();
        } else if (nextSteps === `Finish building the team`) {
          finishApp();
        }
      });
    });
  });
};

// function to initialize app 
generateTeam();