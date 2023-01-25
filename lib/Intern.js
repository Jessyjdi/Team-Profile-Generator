//Child of Employee

const Employee = require('./Employee'); // import Employee package

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name,id,email);
        this.school = school;
        this.role ="Intern";
    }
    getSchool(){
       // console.log(`Github: ${this.school}`);
        return this.school;
    }

    getRole(){
    return this.role;
}
}

module.exports = Intern; // exports Intern Package