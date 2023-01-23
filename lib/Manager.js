// Child of Employee

const Employee = require('./Employee'); // import Employee package

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    getOfficenumber(){
        return this.officeNumber;
    }
   
    getRole(){
    return 'Manager';
}
}

module.exports = Manager; // exports manager package