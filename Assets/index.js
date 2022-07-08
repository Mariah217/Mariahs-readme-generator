// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const generateREADME = ({title, description, installation, usage, contributing, tests, license, github, email}) =>
``

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
        choices: ['MIT', 'Apache', 'GPL', 'Compliant', 'MIT + file License'],
        name: 'license',
    },
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
const filename = response + "README.md"
fs.writeFileSync("README.md", generateREADME(response))

// TODO: Create a function to initialize app
inquirer
.prompt(questions)
.then(response =>{
    console.log(response)
})

// Function call to initialize app
init();
