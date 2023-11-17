// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    const licenseBadge = {
      "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      "GNU AGPLv3": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    }


    const licenseBadgeFormat = licenseBadge[data.license] || "";

  return `
  # ${data.title} ${licenseBadgeFormat}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)  
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributions}
  
  ## Tests
  ${data.test}
  
  ## Questions
  If there are any questions, you can reach me at 
  ${data.email}, or look at my other work by visiting ${data.username}.   
  `;
}

module.exports = generateMarkdown;