// Function to return license badge based on which license was selected by user. Badge links to license website.
function renderLicenseBadge(license) {
  if (license==='MIT License') {
    return 'This project is covered under the MIT License. <br><br> [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if (license === 'Apache License'){
    return 'This project is covered under the Apache License. <br><br> [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if (license === 'Boost License') {
    return 'This project is covered under the Boost License. <br><br> [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
  else {
    return '';
  }
}

//Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## License
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Badges


## Questions
If you have any questions, please feel free to contact me!

#### GitHub:
${data.github}
#### E-mail: 
${data.email}
`;
}

module.exports = generateMarkdown;