const inquirer = require('inquirer');
const Employee = require('./lib/classes')
const Manager = require('./lib/classes')
const Engineer = require('./lib/classes')
const Intern = require('./lib/classes')

// // Team Builder needs questions to identify role, and roles determine which follow up questions to ask


 inquirer.prompt ([
    {
        name: 'role',
        type: 'checkbox',
        message: 'What type of role is this employee?',
        choices: [ 'Manager', 'Engineer', 'Intern' ]
    }
// if employee is a manager, needs to return the office phone number
    ]) .then( response => {
        if( response.role == 'Manager' ){
        inquirer.prompt([
             {
                name: 'officenumber',
                type: 'number',
                message: 'What is the office phone number?'
             }
             ])}
            
// if employee is an engineer, needs to return the github username
        if( response.role == 'Engineer' ){
        inquirer.prompt([
            {
                name: 'github',
                type: 'input',
                message: 'What is your GitHub Username?'
            }
         ])}
        if( response.role == 'Intern' ){
        inquirer.prompt([
            {
                name: 'school',
                type: 'input',
                message: 'Where do you attend school if applicable?'
            }
         ])}


        });


        
// const employee = new Employee('Victor', 'idk', 'Manager', 'email.com')

// employee.getEmail();
