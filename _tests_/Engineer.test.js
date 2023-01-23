//Child of Employee
const Engineer = require('../lib/Engineer');
// start set
test('if gitHub account can set via the constructor',() =>{
    const td ="GitHubname";
    const eng = new Engineer("Alpha",1001,"aplha_1001@hotmail.com", td);
    expect(eng.github).toBe(td);
});
// end set
// Validate getRole()
test('if the getRole() return the \"Engineer\"',() =>{
    const td = "Engineer";
    const eng = new Engineer("Alpha",1001,"aplha_1001@hotmail.com","GitHubname");
    expect(eng.getRole()).toBe(td);
});
// start get
 test('if github account can get via getGithub()',() =>{
    const td = "GitHubname";
    const eng = new Engineer("Alpha",1001,"aplha_1001@hotmail.com", td);
    expect(eng.getGithub()).toBe(td);
 });
 // End get