//require inquirer and fs packages/dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// import Employee files to build My Team
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Build array for the Roles Engineer, Intern and Manager
const engineers = [];
const interns = [];
const managers = [];

/* Basic Structure of setting up inquirer
inquirer.prompt(questions).then(answers => {});
*/

const createTeamMember = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "createTeamMember",
        message: "Would you like to add another team member?",
      },
    ])
    .then((answers) => {
      if (answers.createTeamMember === true) {
        startProfile();
      } else {
        console.log(managers, engineers, interns);
        module.exports = managers;
        module.exports = engineers;
        module.exports = interns;
        deleteHtmlFile();
        mainHtmlFile();
        generateManager();
        generateEngineer();
        generateIntern();
        endOfHtmlFile();
        return answers;
      }
    });
};

// Choose Role to start building the team

const startProfile = () => {
  console.log(`
  =========================================
  Please enter the info to create your Team
  =========================================
  `)
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the Employee role?",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
    .then((answers) => {
      if (answers.role === "Engineer") {
        promptEngineerQ();
      } else if (answers.role === "Intern") {
        promptInternQ();
      } else if (answers.role === "Manager") {
        promptManagerQ();
      }
    });
};
startProfile();

// The below function is used if choice is "Engineer".

const promptEngineerQ = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("\nPlease enter the engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineer's id?",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("\nNot a Number!Please enter the intern's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer's email?",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("\nPlease enter a valid email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's github name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("\nPlease enter the engineer's github username!");
          }
        },
      },
    ])
    .then((answers) => {
      const newEng = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      engineers.push(newEng);
      createTeamMember();
    });
};

// The below function is used if choice is "Intern".

const promptInternQ = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("\nPlease enter the intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the Intern's id?",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("\nOnly Numberic! Please enter the intern's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the Intern's email?",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("\nPlease enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Which school did the intern attend?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("\nPlease enter the intern's school!");
          }
        },
      },
    ])
    .then((answers) => {
      const newIntern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      interns.push(newIntern);
      createTeamMember();
    });
};

const promptManagerQ = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the managers name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("\nPlease enter the manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the managers id number?",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("\nPlease enter the manager's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the managers email?",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("\nPlease enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the managers office number?",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("\nPlease enter an office number!");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((answers) => {
      const newManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber,
        answers.role
      );
      managers.push(newManager);
      createTeamMember();
    });
};

const deleteHtmlFile = () => {
  // fs.unlinkSync() method ref:https://www.geeksforgeeks.org/node-js-fs-unlinksync-method/
  fs.unlinkSync("./dist/index.html");
  console.log("\nFile index.html");
};

const mainHtmlFile = () => {
  fs.appendFileSync("./dist/index.html", generateHtml());
};

const endOfHtmlFile = () => {
  fs.appendFileSync("./dist/index.html", endHtml());
};

const generateHtml = () => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Team Profile Generator</title>
        <link rel="stylesheet" type="text/css" href="./style.css">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <h1 class="text-center p-3 mb-2 bg-danger text-white">My Team</h1>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossorigin="anonymous"
        ></script>`;
};

const generateManager = () => {
  managers.forEach((Manager) => {
    fs.appendFileSync("./dist/index.html", generateMgr(Manager));
  });
};

const generateMgr = (Manager) => {
  return `<div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card text-bg-primary" style="width: 18rem">
        <h2> ${Manager.name}</h2>
        <h3 class="text-left manager">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-hot-fill" viewBox="0 0 16 16" >
            <path
              fill-rule="evenodd"
              d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z"
            />
            <path
              d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"
            />
          </svg>  Manger
        </h3>
        <div class="card-body"></div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${Manager.name}</li>
          <li class="list-group-item">Id: ${Manager.id}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${Manager.email}">${Manager.email}</a>
          </li>
          <li class="list-group-item">Role: ${Manager.role}</li>
          <li class="list-group-item">OfficeNumber: ${Manager.officeNumber}</li>
        </ul>
      </div>
    </div>`;
};

const generateEngineer = () => {
  engineers.forEach((engineer) => {
    fs.appendFileSync("./dist/index.html", generateEng(engineer));
  });
};

const generateEng = (Engineer) => {
  return `<div class="col">
    <div class="card text-bg-primary" style="width: 18rem">
    <h2> ${Engineer.name}</h2>
      <h3 class="text-left engineer">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
<path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
</svg> Engineer
      </h3>
      <div class="card-body"></div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${Engineer.name}</li>
        <li class="list-group-item">Id: ${Engineer.id}</li>
        <li class="list-group-item">
          Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a>
        </li>
        <li class="list-group-item">Role: ${Engineer.role}</li>
        <li class="list-group-item">
          Github:
          <a href="https://github.com/${Engineer.github}"
            >${Engineer.github}</a
          >
        </li>
      </ul>
    </div>
  </div> `;
};

const generateIntern = () => {
  interns.forEach((intern) => {
    fs.appendFileSync("./dist/index.html", generateInt(intern));
  });
};

const generateInt = (Intern) => {
  return `<div class="col">
    <div class="card text-bg-primary" style="width: 18rem">
    <h2> ${Intern.name}</h2>
      <h3 class="text-left intern">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
          </svg> Intern
      </h3>
      <div class="card-body"></div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${Intern.name}</li>
        <li class="list-group-item">Id: ${Intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
        <li class="list-group-item">Role: ${Intern.role}</li>
        <li class="list-group-item">School: ${Intern.school}</li>
      </ul>
    </div>
  </div>
</div>
    `;
};
const endHtml = () => {
  return `</body>
    </html>`;
};
