const employee = require('../lib/employee');

const newEmployee = new employee()
//dummy data for testing purposes 

test('test employee info', ()=>{
  expect (newEmployee.id).toBe('1101')
  expect (newEmployee.name).toBe('Julia')
  expect (newEmployee.email).toBe('devine@gmail.com')
  
  expect (newEmployee.id).toBe('1102')
  expect (newEmployee.name).toBe('Joe')
  expect (newEmployee.email).toBe('ritchie@gmail.com')
});

