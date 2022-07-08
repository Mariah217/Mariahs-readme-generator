// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
#Badges

#Description:
${data.description}

#Table of Contents: 
*[Description](#description)
*[Installation](#installation)
*[Usage](#usage)
*[Contributions](#contributions)
*[Tests](#tests)
*[License](#license)

#Installation
${data.installation}

##Usage
${data.usage}

##Contribution
${data.contributing}

##Tests
${data.tests}

##License
${data.license}

#Questions
If you have any questions regarding generating a readme or if you have any questions, please contact me at:

*GitHub: ${data.github}
*E-mail: ${data.email}
`;
}

module.exports = generateMarkdown;
