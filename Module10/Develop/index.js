const inquirer = require('inquirer');

const employee = require('./lib/employee');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

const team = [];
//Options
function options() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add an employee, intern or manager?'
            choices: ['Add employee', 'Add intern', 'Add manager']
        },

}


//create the functions for employees, intern and manager
function addEmployee() {
    inquirer
    .prompt([
        {
            type: 'input',
            name:'internName',
            message: 'Please enter the name of the employee you would like to add:______',
            validate: answer => {
                if (answer ===){
                    console.log('adding intern')
                    return false;

                }
            }
        }
    ])
}

//add an intern to the team
function addIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            name:'internName',
            message: 'Please enter the name of the intern you would like to add:______',
            validate: answer => {
                if (answer ===){
                    console.log('adding intern')
                    return false;

                }
            }
        }
    ])
}
function getManager() {
    console.log(" ");
    inquirer 
        .prompt([
            type:"input",
            name:"managerName",
            message:"Please enter the name of your Manger: ________"
            validate: answer=> {
                if (answer)
            }
        ])
}
function addTeam(){
    inquirer
        .prompt([{
            type:'list',
            name: 'employeeRole',
            message:'Would you like to add employee or intern?',
            choices: ['Employee', 'Intern', 'Not at this time']
        }]).then(chosen =>{

        }
            )
}

