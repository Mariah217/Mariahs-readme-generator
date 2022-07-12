// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown'); //require is a built in import function

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
        message: 'Please provide any installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions and examples for use.',
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
        type: 'list',
        message:'Select a license from the following:',
        choices: ['MIT License', 'Apache License', 'Boost License', 'N/A'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'GitHub Username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'E-mail Address:',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeReadme(filename, data) {
    fs.writeFileSync(filename, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        writeReadme("demoREADME.md", generateMarkdown(data));
    }
)}


// Function call to initialize app
init()
