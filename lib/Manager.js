// Child of Employee

const Employee = require('./Employee'); // import Employee package

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.role ="Manager";
    }
    getOfficenumber(){
        return this.officeNumber;
    }
   
    getRole(){
    return this.role;
}
}

module.exports = Manager; // exports manager package