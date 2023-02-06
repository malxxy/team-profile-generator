// required modules
const inquirer = require('inquirer'); // require inquirer from node modules
const Employee = require('./lib/Employee'); // require the Employee class
const Engineer = require('./lib/Engineer'); // require the Engineer class
const Intern = require('./lib/Intern'); // require the Intern class
const Manager = require('./lib/Manager'); // require the manager class
const fs = require('fs'); // require fs to write files
const generateTeamProfile = require('./lib/generateTeamProfile'); // require fucntion to generate the Team Profile

// Questions upon launching app to insert team manager info
const addManager = [
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

const addEmployee = [
  {
    type: 'input',
    message: 'What is the employee first and last name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is their id?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is their email?',
    name: 'email',
  }
]

// after entering team manager info, user given 3 options
const homeQs = [
    {
        type: 'list',
        choices: ['Add a manager','Add an engineer','Add an intern','Finish building the team'],
        message: 'What would you like to do?',
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

// function addAManager(responses) {
//   inquirer.prompt(addManager).then((data) => {
//     engineer = new Manager();
//   });
// }

function addAnEngineer(responses) {
  inquirer.prompt(addEngineer).then((data) => {
    engineer = new Engineer(data.name,data.id,data.email,data.github);
  });
};

function addAnIntern(responses) {
  inquirer.prompt(addIntern).then((data) => {
    intern = new Intern(data.name,data.id,data.email,data.school);
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
  inquirer.prompt(employeeQs).then((responses) => {
    employee = new Employee(responses.name,)
    teamManager = new Manager(responses.name,responses.id,responses.email,responses.officeNumber)
    .then((nextSteps) => {
      inquirer.prompt(additionalQs).then((nextSteps) => {
        if  (nextSteps === 'Add an engineer') {
          addAnEngineer();
        } else if (nextSteps === 'Add a manager') {
          addAManager();
        }
        else if (nextSteps === 'Add an intern') {
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