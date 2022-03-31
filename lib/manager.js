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
       <div class="card">
           <h3 class="card-header">Manager</h3>
           <div class="card-body">
             <h4 class="card-title">${this.empName}</h4>
             <p class="card-text">${this.id}</p>
             <p class="card-text">${this.email}</p>
             <p class="card-text">${this.phoneNumber}</p>
           </div>
       </div>
       </div>`
   }
}

module.exports = Manager
