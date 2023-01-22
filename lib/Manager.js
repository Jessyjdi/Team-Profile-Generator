// Child of Employee

const Manager = require('./Employee'); // import Employee package

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
   
    getRole(){
    return 'Manager';
}
}

module.exports = Manager; // exports manager package