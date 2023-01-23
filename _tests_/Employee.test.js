//Parent
const Employee = require("../lib/Employee"); // import Employee.js

describe("Employee", () =>{ 
    // start of set
    it("Initiate Employee instance", () =>{
        const emp = new Employee();
        expect(typeof(emp)).toBe("object");
    });

    it("Set Employee name via constructor argument",() =>{
        const name ="Alpha";
        const emp = new Employee(name);
        expect(emp.name).toBe(name);
    });

    it("Set Employee ID via constuctor argument",() =>{
        const id = 1001;
        const emp = new Employee("Alpha",id);
        expect(emp.id).toBe(id);
    });

    it("Set Employee email via constructor argument",() =>{
        const email ="aplha_1001@hotmail.com";
        const emp = new Employee("Alpha",1001,email);
        expect(emp.email).toBe(email);
    });
    // End of set

    // start of get

    describe("getName",() =>{
        it("Get Employee name via getName()",() =>{
            const td = "Alpha";
            const emp = new Employee(td);
            expect(emp.getName()).toBe(td);
        });
    });
    
    describe("getId",() =>{
        it("Get Employee Id via getId()",() =>{
            const td = 1001;
            const emp = new Employee("Alpha",td);
            expect(emp.getId()).toBe(td);
        });
    });

    describe("getEmail",() =>{
        it("Get Employee email via getEmail()",() =>{
            const td = "aplha_1001@hotmail.com";
            const emp = new Employee("Aplha",1001,td);
            expect(emp.getEmail()).toBe(td);
        });
    });

    describe("getRole",() =>{
        it("The getRole() should return \"Employee\"",() =>{
            const td = "Employee";
            const emp = new Employee("Alpha",1001,"aplha_1001@hotmail.com");
            expect(emp.getRole()).toBe(td);
        });
    });
    // End of get

});