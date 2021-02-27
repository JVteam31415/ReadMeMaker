// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var link = renderLicenseLink(license);
  var badge = renderLicenseBadge(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ##Description
    ${data.description}
    ##Github user
    ${data.github}
    ###User Email
    ${data.email}      
    ##License
    ${data.license}
    ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
