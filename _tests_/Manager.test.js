//Child of Employee

const Manager = require('../lib/Manager');
// start set
test('if office number is set to manager role via constructor', () => {
    const td = 1;
    const m = new Manager("Gamma", 1010, "gamma_1010@hotmail.com", td);
    expect(m.officeNumber).toBe(td);
  });
  // End set 
  // Validate getRole()
  test('if the getRole() return \"Manager\"', () => {
    const td = "Manager";
    const m = new Manager("Gamma", 1010, "gamma_1010@hotmail.com",1);
    expect(m.getRole()).toBe(td);
  });
  // start get
  test('if the getSchool() get the school name', () => {
    const td = 1;
    const m = new Manager("Gamma", 1010, "gamma_1010@hotmail.com", td);
    expect(m.getOfficenumber()).toBe(td);
  });
  //end get
