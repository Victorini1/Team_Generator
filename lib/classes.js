// class has to encompass the name, id, role, and email  

class Employee{
    constructor(empName, id, role, email){
    this.empName = empName;
    this.id = id;
    this.role = role;
    this.email = email;
    }
  getName(){
      console.log(`${this.empName}`)
  }
  getRole(){
      return 'Employee'
  }
  getEmail(){
      console.log(`${this.email}`)
  }
}

// manager needs the office phone number

class Manager extends Employee{
     constructor (empName, id, role, email, phoneNumber){
         super (empName, id, email)
     this.phoneNumber = phoneNumber;
     this.role = role;
    }
    getRole(){
        return 'Manager';
    }
    getPhone(){
        return `${this.phoneNumber}`
    }
 }

// engineer needs to Github

 class Engineer extends Employee{
     constructor (empName, id, role, email, gitHub){
        super (empName, id, email)
        this.role = role
        this.gitHub = gitHub
    }
    getGitHub(){
        return `${this.gitHub}`;
    }
    getRole(){
        return `Engineer`
    }
 }
// intern needs school info

class Intern extends Employee{
    constructor (empName, id, role, email, school){
        super (empName, id, email)
        this.role = role;
        this.school = school;
    }
    getSchool(){
        return `${this.school}`;
    }
    getRole(){
        return 'Intern';
    }
}

module.exports = Employee, Manager, Engineer, Intern