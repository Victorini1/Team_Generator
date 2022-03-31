const Employee = require('./employee')

// manager needs the office phone number

class Manager extends Employee{
    constructor (empName, id, role, email, phoneNumber){
        super (empName, id, role, email)
    this.phoneNumber = phoneNumber;
   }
   getRole(){
       return 'Manager';
   }
   getPhone(){
       return `${this.phoneNumber}`
   }
   getHTML(){
       return `
       <div class="col-xl-3 col-md-6 col-xxl-3">
       <div id="managercard" class="card">
           <div class="card-header d-flex justify-content-between" >
           <h3>Manager</h3><i class="fa-brands fa-black-tie fa-xl"></i></div>
           <div class="card-body">
             <h4 class="card-title">Name: ${this.empName}</h4>
             <p class="card-text">ID: ${this.id}</p>
             <p class="card-text">email: ${this.email}</p>
             <p class="card-text">phone number: ${this.phoneNumber}</p>
           </div>
       </div>
       </div>`
   }
}

module.exports = Manager
