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
   getHTML(Manager){
       return `
       <div class="col-xl-3 col-md-6 col-xxl-3">
       <div class="card">
           <h3 class="card-header">Engineer</h3>
           <div class="card-body">
             <h4 class="card-title">${Manager.empName}</h4>
             <p class="card-text">${Manager.id}</p>
             <p class="card-text">${Manager.email}</p>
             <p class="card-text">${Manager.phoneNumber}</p>
           </div>
       </div>`
   }
}

module.exports = Manager
