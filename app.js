const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
   }
 ])
 .then(answers => console.log(answers))
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