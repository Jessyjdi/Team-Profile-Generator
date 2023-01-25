//Child of Employee

const Intern = require("../lib/Intern");
describe("Intern",()=>{
  describe("Test consrtuctor",()=>{
// start set
  test("if school is set via constructor", () => {
    const td = "Washington University";
    const i = new Intern("Beta",10010,"beta_10010@hotmail.com",td);
    expect(i.school).toBe(td);
  });
});
  // End set 

  describe("Test method",()=>{
  // start get
  test("if the getSchool() get the school name", () => {
    const td = "Washington University";
    const i = new Intern("Beta", 10010, "beta_10010@hotmail.com", td);
    expect(i.getSchool()).toBe(td);
  });
  //end get

  // Validate getRole()
  describe("Test method", () =>{
   test("if the getRole() return \"Intern\"", () => {
    const td = "Intern";
    const i = new Intern("Beta",10010,"beta_10010@hotmail.com","Washington University");
    expect(i.getRole()).toBe(td);
  });
});

});
});