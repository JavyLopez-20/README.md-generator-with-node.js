// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = () => {
return inquirer.prompt([
        {
        type: 'input',
        name: 'title',
        message: 'Project Title:',
        },
        {
        type: 'input',
        name: 'description',
        message: 'Description:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation Guide:',
         },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage:',
         },
         {
            type: 'list',
            name: 'license',
            message: 'License:',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'ISC', 'None'],
            
         },
         {
            type: 'input',
            name: 'contributing',
            message: 'Contributing:',
         },
         {
            type: 'input',
            name: 'tests',
            message: 'Tests:',
         },
         {
            type: 'input',
            name: 'github',
            message: 'GitHub Username:',
         },
         {
        type: 'input',
        name: 'email',
        message: 'Email Address:',
         },
    ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README has been generated')
    });
};

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
    });
};

// Function call to initialize app
init();
