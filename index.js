const inquirer = require('inquirer');
const fs = require ('fs');
const { type } = require('node:os');
const Manager = require (".lib/manager");
const Engineer = require (".lib/engineer");
const Intern = require ("./lib/intern");


const team = []



//AS A manager
//I WANT to generate a webpage that displays my team's basic info
//SO THAT I have quick access to their emails and GitHub profiles


//inquirer prompt to get user input for manager

const ManagerInfo = () => {
      inquirer .prompt ([ {
            type:"input",
            message:"What is the team manager's name?",
            name: "name",
       },
       {
            type:"input",
            message:"What is the team manager's employee ID?",
            name: "id",

       },
       {
            type:"input",
            message:"What is the team manager's email?",
            name: "email",
       },
       {
            type:"input",
            message:"What is the team manager's office number?",
            name: "officeNumber",
       }
      ])
};
      //Manager Constructor
      
            const {name, id, email, officeNumber} = mangerInfo
            const Manager = new Manger(name, id, email, officeNumber)
            team.push(manager);
            
            //use nextOption to go to the next prompt???
    


//inqurier prompt for employee type input
      
const employeeType = () => {
      inquirer .prompt ([  {
            type:"list",
            message:"What team member would you like to add next?",
            choices: ["Engineer", "Intern"],
            name: "employeeType"
      },
])

//switch case to prompt next option to user based on input
// syntax error? REVIEW
      .then((data) => {
            switch (data.employeeType) {
                  case "Engineer":
                        promptEngineerInfo()
                        break;
                  case "Intern":
                        promptInternInfo()
                        break;
            }
      });
    
      

//engineer prompt
const promptEngineerInfo  = () => {
      inquirer .prompt ([ {
            type:"input",
            message:"What is the Engineer's name?",
            name: "name",
       },
       {
            type: "input",
            message: "What is the Engineer's employee ID?",
            name: "id",
      },
      {     
            type: "input",
            message: "What is the Engineer's email?",
            name: "email",

      },
      {
            type: "input",
            message: "What is the Engineer's GitHub username",
            name: "github",
      }
])
//engineer constructor

.then ((promptEngineerInfo) => {
      const {name, id, email, github} = mangerInfo
            const Engineer = new Engineer(name, id, email, github)
            team.push(engineer);
           
            //use nextOption to go to the next prompt???
}
)};

//intern prompt
const promptInternInfo  = () => {
      inquirer .prompt ([ {
            type:"input",
            message:"What is the Intern's name?",
            name: "name",
       },
       {
            type: "input",
            message: "What is the Intern's employee ID?",
            name: "id",
      },
      {     
            type: "input",
            message: "What is the Intern's email?",
            name: "email",

      },
      {
            type: "input",
            message: "What is the Intern's school name",
            name: "school",
      }
])


//intern constructor
.then ((promptInternInfo) => {
      const {name, id, email, github} = internInfo
            const Intern = new Intern(name, id, email, school)
            team.push(intern);
           
            //use nextOption to go to the next prompt???
}
)};

//render html page
fs.writeFileSync("Team Profile", generateTeamProfile, (err) =>
      err ? console.log(err) : console.log("Success!"))