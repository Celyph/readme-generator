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


// Function call to initialize app
inquirer
    .prompt(questions)
    .then((answers) => {
        const readme = `# ${answers["projectTitle"]}\n
${answers["desc"]}\n
## Installation Instructions\n
${answers["install"]}\n
## Usage Information\n
${answers["usage"]}\n
## Contribution Guidelines\n
${answers["contrib"]}\n
## License\n
${answers["license"]}\n
## Github Profile\n
${answers["github"]}\n
## Email Address\n
${answers["email"]}\n`;

        console.log("about to write");
        try {
            fs.writeFileSync("readme.md", readme);
        } catch (err) {
            console.log(err);
        }
        console.log("done writing");
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
