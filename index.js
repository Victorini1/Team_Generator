const fs = require('fs')
const inquirer = require('inquirer');
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const allData = {managers: [], engineers: [], interns: []};

// // Team Builder needs questions to identify role, and roles determine which follow up questions to ask
function buildTeam(){

        inquirer.prompt ([
            {
                name: 'name',
                type: 'input',
                message: 'What is the name of this employee?',
            },
            {
                name: 'id',
                type: 'input',
                message: 'What is thier ID',
            },
            {
                name: 'email',
                type: 'input',
                message: 'What is their email?',
            },
            {
                name: 'role',
                type: 'checkbox',
                message: 'What type of role is this employee?',
                choices: [ 'Manager', 'Engineer', 'Intern' ]
            }
        // if employee is a manager, needs to return the office phone number
            ]) .then( response => {
                const employee = new Employee(response.name, response.id, response.role, response.email);
                if( response.role == 'Manager' ){
                    // console.log(employee)
                    managerQuestions(employee);
                }         
                if( response.role == 'Engineer' ){
                    engQuestions(employee);
                }
                if( response.role == 'Intern' ){
                    intQuestions(employee);
                }


                });

}

buildTeam();

function managerQuestions(employee){
    inquirer.prompt([
        {
            name: 'officeNumber',
            type: 'number',
            message: 'What is the office phone number?'
        },
        {
            name: 'newMember',
            type: 'confirm',
            message: 'Would you like to add another team member?'
        }
    ])
        .then( response =>{
            const manager = new Manager(employee.empName, employee.id, employee.role, employee.email, response.officeNumber)
            // console.log(manager);
            if (response.newMember == true){
                allData.managers.push(manager)
                return buildTeam();
            } else {
                allData.managers.push(manager)
                renderHTML(allData)
            }
        })
        }
function engQuestions(employee){
    inquirer.prompt([
        // if employee is an engineer, needs to return the github username
        {
            name: 'github',
            type: 'input',
            message: 'What is your GitHub Username?'
        },
        {
            name: 'newMember',
            type: 'confirm',
            message: 'Would you like to add another team member?'
        }
    ])
        .then( response =>{
            const engineer = new Engineer(employee.empName, employee.id, employee.role, employee.email, response.github)
            // console.log(engineer);
            if (response.newMember == true){
                allData.engineers.push(engineer)
                return buildTeam();
            } else {
                allData.engineers.push(engineer)
                renderHTML(allData)
            }
        })
        }
function intQuestions(employee){
    inquirer.prompt([
    // intern questions need to ask about the school
        {
            name: 'school',
            type: 'input',
            message: 'Where do you attend school if applicable?'
        },
        {
            name: 'newMember',
            type: 'confirm',
            message: 'Would you like to add another team member?'
        }
    ])
        .then( response =>{
            const intern = new Intern(employee.empName, employee.id, employee.role, employee.email, response.school)
            // console.log(intern);
            if (response.newMember == true){
                allData.interns.push(intern)
                return buildTeam();
            } else {
                allData.interns.push(intern)
                // console.log(allData)
                renderHTML(allData)
                
            }
        })
        }

function renderHTML(allData){
    fs.writeFile('./dist/index.html', buildHTML(allData), () =>  console.log('Good luck to your team!')  )
}

function buildHTML(allData){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>    
    <link href="https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Roboto+Condensed&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
        <title>Team Builder App</title>
    </head>
    <body>
        <header>
            <nav id="navbar" class="navbar sticky-top justify-content-center">
                <a class="navbar-brand" href="#!">Team Builder</a>
              </nav> 
              <div class="jumbotron">
                <h1 class="display-3 d-flex justify-content-center">Let's Get Started</h1>
                <p class="lead d-flex justify-content-center">Your team will output Below</p>
              </div>     
        </header>
        <main>
            <div class="container">
            <div class="row d-flex justify-content-center">
            ${allData.managers.map(managers =>{
                return managers.getHTML()
            })}
            ${allData.engineers.map(engineers =>{ 
                return engineers.getHTML()
            } )}
            ${allData.interns.map(interns => {
                return interns.getHTML()
            })}
            </div>         
    </div>
    </main>
    
    <footer>
        <div class="navbar navbar-fixed-bottom"></div>       
    </footer>
</body>
<script src="https://kit.fontawesome.com/4737c1ae12.js" crossorigin="anonymous"></script>
</html>`
}

