const inquirer = require('inquirer');

// class has to encompass the name, role, and email  
class Employee{
    constructor(name, role, email){
    this.name = name;
    this.role = role;
    this.email = email;
    }
  getName(){
      console.log(`${this.name}`)
  }
  getRole(){
      console.log(`${this.role}`)
  }
  getEmail(){
      console.log(`${this.email}`)
  }
}

 class Manager extends Employee{
     constructor(phoneNumber){
     this.phoneNumber = phoneNumber
     super(name, role, email)
    }
 }

// Team Builder needs questions to identify role, and roles determine which follow up questions to ask


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
            type: 'input',
            message: 'What is your office phone number?'
        }
    ])}
// if employee is an engineer, needs to return the github username
    
});