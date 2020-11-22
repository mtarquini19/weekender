const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(writeToFile);

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "Please enter your Github username: ",
        name: 'username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Error: A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter the name of your Github repository: ",
        name: 'repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Error: A valid GitHub repository is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Please write a brief description of the project that you are working on: ",
        name: 'description',
    },
    {
        type: 'input',
        message: "What are the installations needed to run the project?",
        name: 'installation',
    },
    {
        type: 'input',
        message: "How would you like your project to be used?",
        name: 'usage',
    },
    {
        type: 'input',
        message: "How would you like other users to contribute?",
        name: 'contributions',
    },
    {
        type: 'input',
        message: "Please provide test instructions: ",
        name: 'test',
    },
    {
        type: 'checkbox',
        message: "Please select a license option from the menu: ",
        choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'MIT License', 'The Unlicense'],
        name: 'license',
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
