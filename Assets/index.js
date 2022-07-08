// TODO: Include packages needed for this application
import inquirer from 'inquirer'
import fs from 'fs'

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide any istallation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions and examples for use. Please also include a screenshot of your webpage.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Write tests for your application and provide examples on how to run them.',
        name: 'tests',
    },
    {
        type: 'rawlist',
        message:'Select a license from the following:',
        choices: '',
        name: 'license',
    },
    // {
    //     type: 
    //     message:
    //     name: 'badges' 
    // },
    {
        type: 'input',
        message: 'Enter your GitHub username.',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your e-mail.',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
