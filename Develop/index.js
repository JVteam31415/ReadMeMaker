// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input

//Description y, Table of Contents, Installation,
//Usage, License y, Contributing y, Tests, and Questions

//ToC Generated to include rest of things
const questions = [{type: 'input',
name: 'title',
message: "What is the title of your project?"},
    {
    type: 'input',
    name: 'github',
    message: 'what is your github username?'
},
{
    type:'input',
    name: 'email',
    message: 'What is your email?'
},
{
    type:'input',
    name: 'description',
    message:"Write a description of your project:"
},
{type: 'input',
name:"installation" ,
message:"What are instructions for installation?"
},
{type: 'input',
name:"usage" ,
message:"Describe how to use this product:"
},

{
    type: 'list',
    name: "license",
    message: "What kind of license is your project using",
    choices:["MIT","APACHE", 'NONE']
},
{type: 'input',
name:"tests" ,
message:"Tests?"
},
{type: 'input',
name:"questions" ,
message:"Questions?"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then( (inquirerResponses) =>{
        console.log("generating markdown")
            writeToFile('README.md', generateMarkdown( { ...inquirerResponses} ) )
    }   );


}

// Function call to initialize app
init();
