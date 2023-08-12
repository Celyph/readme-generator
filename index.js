// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = [
    {name: "projectTitle", message: "Project Title: "},
    {name: "desc", message: "Description: "},
    {name: "install", message: "Installation Instructions: "},
    {name: "usage", message: "Usage Information: "},
    {name: "contrib", message: "Contribution Guidelines: "},
    {name: "license", message: "License: "},
    {name: "github", message: "Github Profile: "},
    {name: "email", message: "Email Address: "}
];

const readme = "# ${0}\n"
    + "${1}\n"
    + "## Installation Instructions\n"
    + "${2}\n"
    + "## Usage Information\n";
    + "${3}\n"
    + "## Contribution Guidelines\n"
    + "${4}\n"
    + "## License\n"
    + "${5}\n"
    + "## Github Profile\n"
    + "${6}\n"
    + "## Email Address\n"
    + "${7}\n"


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("asdf");
    fs.writeFile(filename, data, (err) => {
        if (err) throw err;
    });
}



// Function call to initialize app
inquirer
    .prompt(questions)
    .then((answers) => {
        const formatted = readme.format(answers["projectTitle"], answers["desc"], answers["install"], answers["usage"], answers["contrib"], answers["license"], answers["github"], answers["email"]);
        console.log(formatted);
        fs.writeFile(filename, data, (err) => {
            if (err) throw err;
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
