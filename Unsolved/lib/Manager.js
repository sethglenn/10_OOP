const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super (name, id, email)
        this.officeNumber = officeNumber;
      }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getOffice(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager"
    }

}

module.exports = Manager;