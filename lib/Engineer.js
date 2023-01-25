//Child of Employee 
//Use 'extends' keyword to inherit the property of the Parent class'Employee'.

const Employee = require('./Employee'); // import Employee package

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name,id,email);
        this.github = github;
        this.role = "Engineer";
    }
    getGithub(){
        //console.log(`Github: ${this.github}`);
        return this.github;
    }

    getRole(){
    return this.role;
    }
}

module.exports = Engineer; // exports Engineer package