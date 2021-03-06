const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "main.html");

const render = require("./lib/htmlRenderer");
const employeesTwo = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


inquirer.prompt([
    {
        type: "list",
        message: "Would you like to add another employee?",
        name: "employeeAdd",
        choices: [
            "Yes",
            "No",
        ]
    },
    {
        type: "list",
        message: "What type of employee would you like to add?",
        name: "employeeType",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
        ]
    },

])
.then((answers) => {

    if (answers.employeeType === "Manager") {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is your id?",
                name: "id",
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email",
            },
            {
                type: "input",
                message: "What is your office number?",
                name: "officeNumber"
            }

        ]).then(answers => {
            var {name, id, email, officeNumber} = answers;
            const manager = new Manager(name, id, email, officeNumber);
            employeesTwo.push(manager);

            writeFileAsync("./manager.html", render(employeesTwo));
        })
    }
    if (answers.employeeType === "Engineer") {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is your id?",
                name: "id",
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email",
            },
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "gitHub",
            }
        ])
        .then(answers => {
            var {name, id, email, gitHub} = answers;
            const engineer = new Engineer(name, id, email, gitHub);
            employeesTwo.push(engineer);

            writeFileAsync("./engineer.html", render(employeesTwo));
        })
    }
    if (answers.employeeType === "Intern") {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is your id?",
                name: "id",
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email",
            },
            {
                type: "input",
                message: "What is your school?",
                name: "school",
            }

        ])
        .then((answers) => {
            var {name, id, email, school} = answers;
            const intern = new Intern(name, id, email, school);
            employeesTwo.push(intern);

            writeFileAsync("./intern.html", render(employeesTwo));
        })

    }

    return employeesTwo;
})

// .then((answers) => fs.writeFile("./manager.html", answers))
// .then((answers) => fs.writeFile("./engineer.html", answers))
// .then((answers) => fs.writeFile("./intern.html", answers));

    // After the user has input all employees desired, call the `render` function (required
    // above) and pass in an array containing all employee objects; the `render` function will
    // generate and return a block of HTML including templated divs for each employee!

.catch((err) => console.log(err));

    // After you have your html, you're now ready to create an HTML file using the HTML
    // returned from the `render` function. Now write it to a file named `team.html` in the
    // `output` folder. You can use the variable `outputPath` above target this location.
    // Hint: you may need to check if the `output` folder exists and create it if it
    // does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
