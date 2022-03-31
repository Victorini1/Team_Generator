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
        <div id="interncard" class="card">
            <div class="card-header d-flex justify-content-between" >
            <h3>Intern</h3><i class="fa-solid fa-people-pulling fa-xl"></i></div>
            <div class="card-body">
              <h4 class="card-title">Name: ${this.empName}</h4>
              <p class="card-text">ID: ${this.id}</p>
              <p class="card-text">email: ${this.email}</p>
              <p class="card-text">school: ${this.school}</p>
            </div>
        </div>
        </div>`
    }
}

module.exports = Intern 