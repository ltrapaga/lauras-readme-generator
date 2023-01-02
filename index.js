// Imports node modules
const fs = require("fs");
const inquirer = require("inquirer");

// Imports generateMarkdown function
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    // Requests the user to input the title of the project
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    // Requests the user to input a description of the project
    type: "input",
    name: "description",
    message: "Give a brief description of your application.",
  },
  {
    // Requests the user to input the installation steps required for the application
    type: "input",
    name: "installation",
    message: "What are the steps to get this application installed?",
  },
  {
    // Requests the user to input the installation steps required for the project's application
    type: "input",
    name: "usage",
    message: "What are the instructions for usage to navigate this project?",
  },
  {
    // Prompts the user to choose a license type for the project from a list, or to choose "None" to not include a license
    type: "list",
    name: "license",
    message: "Which license is needed for this project?",
    choices: ["MIT", "Apeche", "BDS -3 Clause", "Boost", "None"],
  },
  {
    // Requests the user to input the project's contributors
    type: "input",
    name: "contributing",
    message: "Who contributed to this project?",
  },
  {
    // Requests the user to input how the project's application was tested
    type: "input",
    name: "tests",
    message: "How did you test this application?",
  },
  {
    // Requests the user to input a github username for questions about the project to be sent to
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    // Requests the user to input an email for questions about the project to be sent to
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// writeReadme function will create a file name and use the data input by the user to write a README.md file when it is called
function writeReadme(fileName, data) {
  /* fs.writeFile() method is used to asynchronously write the specified data to a file in the file system of this project.
     A previously written file will be replaced each time the writeReadme function is called */
  fs.writeFile(fileName, data, function (err) {
    console.log(data),
      /* Ternerary statement that says: if the function fails to execute, then console.log(err);
         else, print "README.md has been generated!" to the console */
      err ? console.log(err) : console.log("README.md has been generated!");
  });
}

/* init function initializes inquirer to prompt questions array,
   then run a function using the data we give back to inquirer */
function init() {
  inquirer.prompt(questions).then(function (data) {
    // Calls writeReadme function to create the file name "README.md" and retrieve generateMarkdown padding data
    writeReadme("README.md", generateMarkdown(data));
  });
}

// Function call to initialize application
init();
