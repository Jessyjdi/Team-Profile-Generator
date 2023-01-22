//Child of Employee

const Intern = require('./Employee'); // import Employee package

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name,id,email);
        this.school = school;
    }
    getSchool(){
        console.log(`Github: ${this.github}`);
        return this.school;
    }

    getRole(){
    return 'Intern';
}
}

module.exports = Intern; // exports Intern Package