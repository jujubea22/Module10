const intern = require('../lib/intern');

const newIntern = new intern()
//dummy data for testing purposes 

test('test intern info', ()=>{
  expect (newIntern.id).toBe('0001')
  expect (newIntern.name).toBe('Riley')
  expect (newIntern.email).toBe('princess@gmail.com')
  
  expect (newIntern.id).toBe('0002')
  expect (newIntern.name).toBe('Daphne')
  expect (newIntern.email).toBe('blank@gmail.com')
});