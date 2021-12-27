

// TODO: Create a function to generate markdown for README

// title for readMe to pull data from user input inclusive of licensing display.
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Licensing
  ![badge](https://img.shields.io/badge/license-${data.licensing}-brightorange)

  [https://choosealicense.com/](https://choosealicense.com/)


  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.licensing}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## Questions:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;