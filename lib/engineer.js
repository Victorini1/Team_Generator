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
       <div id="engineercard" class="card">
           <div class="card-header d-flex justify-content-between" >
           <h3>Engineer</h3><i class="fa-solid fa-computer fa-xl"></i></div>
           <div class="card-body">
             <h4 class="card-title">Name: ${this.empName}</h4>
             <p class="card-text">ID: ${this.id}</p>
             <p class="card-text">email: ${this.email}</p>
             <p class="card-text">GitHub: <a href="https://github.com/${this.gitHub}">${this.gitHub}</a></p>
           </div>
       </div>
       </div>`
   }
}

module.exports = Engineer 