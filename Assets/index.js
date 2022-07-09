// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatorMarkdown = require('./utils/generateMarkdown') //require is a built in import function

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
        type: 'rawlist',
        message:'Select a license from the following:',
        choices: ['MIT License', 'Apache License', 'Boost License'],
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
    console.log(filename);
    console.log(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeReadme("README.md", generatorMarkdown(data));
        console.log(data);
    }
)}

// Function call to initialize app
init()
