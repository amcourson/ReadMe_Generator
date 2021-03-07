// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [ 
    {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?',
  },
  {
    type: 'input',
    name: 'install',
    message: 'What are the install instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are the usage requirements?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the test instructions?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What is the correct license for this project?',
    choice : [
      "Mozilla",
      "Open",
      "MIT",
      "Apache",
      "Academic",
      "GNU",
      "ISC",

    ]
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your Github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt
    (questions)
      .then(answers => {
       var readMeText = generateMarkdown(answers)
       console.log(readMeText)
    writeToFile('./Output/ReadMe.md',readMeText)
      })
      .catch(error => {
        if(error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });
}

// Function call to initialize app
init();
