// class has to encompass the name, id, role, and email  

class Employee{
    constructor(empName, id, role, email){
    this.empName = empName;
    this.id = id;
    this.role = role;
    this.email = email;
    }
  getRole(){
      return 'Employee'
  }
}




module.exports = Employee 


