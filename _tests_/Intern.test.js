//Child of Employee

const Intern = require('../lib/Intern');
// start set
test('if school is set via constructor', () => {
    const td = "Washington_University";
    const i = new Intern("Beta", 10010, "beta_10010@hotmail.com", td);
    expect(i.school).toBe(td);
  });
  // End set 
  // Validate getRole()
  test('if the getRole() return \"Intern\"', () => {
    const td = "Intern";
    const i = new Intern("Beta", 10010, "beta_10010@hotmail.com","Washington_University");
    expect(i.getRole()).toBe(td);
  });
  // start get
  test('if the getSchool() get the school name', () => {
    const td = "Washington University";
    const i = new Intern("Beta", 10010, "beta_10010@hotmail.com", td);
    expect(i.getSchool()).toBe(td);
  });
  //end get