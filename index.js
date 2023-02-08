// required modules
const inquirer = require('inquirer'); // require inquirer from node modules
const Employee = require('./lib/Employee'); // require the Employee class
const Engineer = require('./lib/Engineer'); // require the Engineer class
const Intern = require('./lib/Intern'); // require the Intern class
const Manager = require('./lib/Manager'); // require the manager class
const fs = require('fs'); // require fs to write files
const generateTeamProfile = require('./lib/generateTeamProfile'); // require fucntion to generate the Team Profile
const teamMembers = [];

// Questions upon launching app to insert team manager info
const homeQs = [
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
      message: 'What is their role?',
      name: 'role',
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
        message: 'What is their role',
        name: 'role',
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
      message: 'What is their role',
      name: 'role',
    },
    {
        type: 'input',
        message: 'What school does the intern attend?',
        name: 'school',
    }
] 

function addAnEngineer() {
  console.log('We selected add engineer')
  inquirer.prompt(addEngineer).then((data) => {
    const engineer = new Engineer(data.name,data.id,data.email,'Engineer',data.github); // created new engineer using constructor/class format
    teamMembers.push(engineer);
    console.log('Team member added');
    generateTeam();
  });
};

function addAnIntern() {
  inquirer.prompt(addIntern).then((data) => {
    const intern = new Intern(data.name,data.id,data.email,'Intern',data.school);
    teamMembers.push(intern);
    console.log('Intern added');
    generateTeam();
  });
};

// Function to write the html file
function writeToFile(html, data) {
  return fs.writeFileSync((html),data)
};

// function to close app and generate HTML file, and open HTML file
function finishApp() {
  console.log("Team profile generating...");
  // generateTeamProfile();
  writeToFile('./dist/myTeam.html',generateTeamProfile(teamMembers));
};

function generateManager () {
  inquirer.prompt(homeQs).then((response) => {
    const manager = new Manager(response.name,response.id,response.email,'Manager',response.officeNumber)
    teamMembers.push(manager);
    console.log('Manager added');
    generateTeam();
  });
};

function generateTeam() {
    inquirer.prompt(additionalQs).then(({additionalQs}) => { // destructuring 
      if  (additionalQs === 'Add an engineer') {
        addAnEngineer();
      } else if (additionalQs === 'Add a manager') {
        addAManager();
      } else if (additionalQs === 'Add an intern') {
        addAnIntern();
      } else if (additionalQs === `Finish building the team`) {
        finishApp();
    };
  });
};

// function to initialize app 
generateManager();