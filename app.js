const inquirer = require("inquirer");
const fs = require('fs');
const generatePage = require('./page-template');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('please enter your name')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
      validate: gitInput => {
        if (gitInput) {
          return true;
        } else {
          console.log('put something in')
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself!:',
      when: ({confirmAbout}) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      },
  },  
  ]);
};


const promptProject = portfolioData => {
  portfolioData.projects = [];
  if(!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(`
  ==================
  Add New Project
  ==================
  `)

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: descriptionName => {
        if (descriptionName) {
          return true;
        } else {
          console.log('input description of project')
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)',
      validate: LinkInput => {
        if (LinkInput) {
          return true;
        } else {
          console.log("idc")
          return false;
        }
      }
    },
    
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },

    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false,
      
    }
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });
}

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    const pageHTML = generatePage(portfolioData);

    fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw new Error(err);

    console.log('Page created! Check out index.html in this directory to see it!');
    })
  });




















































//const fs = require('fs')
//const generatePage = require("./src/page-template")
//const pageHTML = generatePage(name, github)


//const printProfileData = (profileDataArr) => {
   // for (let i=0 ; i < profileDataArr.length; i++) {
  //      console.log(profileDataArr[i])
  //  }

  //  console.log('============')

    //its the same as this ...
  //  profileDataArr.forEach((profileItem) =>  console.log(profileItem));
        
//};

//printProfileData(profileDataArgs);

//fs.writeFile('index.html', pageHTML, err => {
    //if (err) throw err;

    //console.log("Portfolio complete ! checkout index.html for the output")
//})
