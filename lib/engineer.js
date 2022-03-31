const Employee = require('./employee')
// engineer needs to Github info

class Engineer extends Employee{
    constructor (empName, id, role, email, gitHub){
       super (empName, id, role, email)
       this.gitHub = gitHub
   }
   getGitHub(){
       return `${this.gitHub}`;
   }
   getRole(){
       return `Engineer`
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
             <p class="card-text">${this.gitHub}</p>
           </div>
       </div>
       </div>`
   }
}

module.exports = Engineer 