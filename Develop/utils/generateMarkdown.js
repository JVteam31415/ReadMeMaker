// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = "";

    //mit = [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  if(license=="MIT"){
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  //Apache = [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  if(license=="APACHE"){
    badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

  }
//none
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  var link = "";

  //mit = [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    if(license=="MIT"){
      link = "https://opensource.org/licenses/MIT"
    }
    //Apache = [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    if(license=="APACHE"){
      link = "https://opensource.org/licenses/Apache-2.0"

    }
return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var link = renderLicenseLink(license);
  var badge = renderLicenseBadge(license);

  return badge+" "+license
}

// TODO: Create a function to generate markdown for README
//Description y, Table of Contents, Installation,
//Usage, License y, Contributing y, Tests, and Questions
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
    Description
    Installation
    Usage
    License
    Contributors
    Tests
    Questions

## Description
    ${data.description}
        
## Installation
    ${data.installation}
## Usage
    ${data.usage}

## License
    ${data.license}
    ${renderLicenseSection(data.license)}

## Contributing:
### Github
    ${data.github}
###User Email
    ${data.email}  


##Tests
    ${data.tests}

##Questions
    ${data.questions}

`;
}

module.exports = generateMarkdown;
