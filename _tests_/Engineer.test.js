//Child of Employee
const Engineer = require('../lib/Engineer');
describe("Engineer",()=>{
    describe("Test consrtuctor",()=>{
// start set
test('if gitHub account can set via the constructor',() =>{
    const td ="https://github.com/Jessyjdi";
    const eng = new Engineer("Alpha",1001,"aplha_1001@hotmail.com", td);
    expect(eng.github).toBe(td);
});
});
// end set
describe("Test method",()=>{
// Validate getRole()
test('if the getRole() return the \"Engineer\"',() =>{
    const td = "Engineer";
    const eng = new Engineer("Alpha",1001,"aplha_1001@hotmail.com","https://github.com/Jessyjdi");
    expect(eng.getRole()).toBe(td);
});
describe("Test method",()=>{
// start get
 test('if github account can get via getGithub()',() =>{
    const td = "https://github.com/Jessyjdi";
    const eng = new Engineer("Alpha",1001,"aplha_1001@hotmail.com", td);
    expect(eng.getGithub()).toBe(td);
 });
 // End get
});

});

});