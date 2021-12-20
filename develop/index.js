// TODO: Include packages needed for this application
//outside packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//direct packages
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your github repo? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter the github repo name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username? (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('A valid github username is required');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('A valid title for the project is required');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Enter a description about your project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description about your project');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions to your project (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please enter the installation instructions about your project');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide a screenshare link to display the usage of the application (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('A valid link for the usage of the application is required');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to the creation of the project? (Required)',
        validate: contributingInput => {
          if (contributingInput) {
            return true;
          } else {
            console.log('Please list the contributors to the project');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them."
    },
      {
        type: 'checkbox',
        name: 'licenses',
        message: 'What licenses is your project covered under? (Check all that apply)',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
      }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Congratulations! Your README.md file has been created!")
    });
}

// TODO: Create a function to initialize app
//referenced the following link to create an ASYNC function and how to format code to simplify it https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
async function init() {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
    try {

        //Inquirer questions- using await via https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
        const userResponses = await inquirer.prompt(questions);
        console.log("Response Confirmations: ", userResponses);
        console.log("Thank for your inputted responses!");
    
        //Call Created to fetch information from Github API for user information
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);
    } catch (error) {
        console.log(error)
    }
};

// Function call to initialize app
init();