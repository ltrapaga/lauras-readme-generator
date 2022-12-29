// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// MIT URL [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// Apache URL [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// Boost URL [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
// BDS - 3 URL [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
// If none return ""


function renderLicenseBadge(data) {}


// If there is no license, return an empty string
function renderLicenseTOC(data) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

## Table of Contents

- [Questions](#questions)


## Questions
If you have any questions about this project, feel free to reach out to me at: ${data.Questions}
https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;


// ${data(inquirer).name}