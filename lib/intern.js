const Employee = require('./employee')
// intern needs school info

class Intern extends Employee{
    constructor (empName, id, role, email, school){
        super (empName, id, role, email)
        this.role = role;
        this.school = school;
    }
    getSchool(){
        return `${this.school}`;
    }
    getRole(){
        return 'Intern';
    }
    getHTML(){
        return `
        <div class="col-xl-3 col-md-6 col-xxl-3">
        <div class="card">
            <h3 class="card-header">Engineer</h3>
            <div class="card-body">
              <h4 class="card-title">${this.empName}</h4>
              <p class="card-text">${this.id}</p>
              <p class="card-text">${this.email}</p>
              <p class="card-text">${this.school}</p>
            </div>
        </div>`
    }
}

module.exports = Intern 