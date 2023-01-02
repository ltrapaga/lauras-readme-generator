// Imports node modules
const fs = require("fs");

function renderLicenseBadge(data) {
  const licenseOption = data.license;
  let licenseBadge = "";

  if (licenseOption === "MIT") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    return licenseBadge;
  }
  if (licenseOption === "Apache") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    return licenseBadge;
  }
  if (licenseOption === "Boost") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    return licenseBadge;
  }
  if (licenseOption === "BDS 3-Clause") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    return licenseBadge;
  }
  if (licenseOption === "None") {
    return licenseBadge;
  }
}

function renderLicenseTOC(data) {
  const licenseOption = data.license;

  if (licenseOption === "None") {
    return "";
  } else {
    return "* [License](#license)";
  }
}

function renderLicenseSection(data) {
  const licenseOption = data.license;

  if (licenseOption === "None") {
    return "";
  } else {
    return `# License
   ${renderLicenseBadge(data)}`;
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data)}
  * [Contributing](#contributions)
  * [Tests](#test)
  * [Questions](#questions)
  ## Installation
  The following necessary dependencies must be installed to run the application: 
  ${data.installation}
  ## Usage
  To use this application, ${data.usage}
  ## License
  ${renderLicenseSection(data)}
  ## Contributions
  Contributors: ${data.contributing}
  ## Tests
  The following is needed to run tests: ${data.tests}
  ## Questions
  If you have any questions about the repository contact me directly at : 
  ${data.email} or https://github.com/${data.github}
  `;
}

module.exports = generateMarkdown;
