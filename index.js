// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const readmeQuestions = ([
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter steps to install this program"
    },
    {
        type: "input",
        name: "usage",
        message: "Describe the usage for this project"
    },
    {
        type: "list",
        name: "license",
        message: "Select a license for this project",
        choices: [
            "MIT",
            "Apache 2.0",
            "GNU AGPLv3",
            "None",
        ],
    },
    {
        type: "input",
        name: "test",
        message: "Enter any testing instructions for this project"
    },
    {
        type: "input",
        name: "contributions",
        message: "Add any contributions/contributors"
    },
    {
        type: "input",
        name: "username",
        message: "Enter your github username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address"
    }

]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error("ERROR:", err);
        return;
      }
      console.log("README GENERATED!");
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(readmeQuestions).then((data) => {
        const readmeContent = generateMarkdown(data);
        const fileReadme = "README.md";

        writeToFile(fileReadme, readmeContent);
    });
}
// Function call to initialize app
init();