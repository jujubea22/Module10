const manager = require('../lib/manager');

const newManager = new manager()
//dummy data for testing purposes 

test('test manager info', ()=>{
  expect (newManager.id).toBe('2001')
  expect (newManager.name).toBe('Debbie')
  expect (newManager.email).toBe('Lawsons@gmail.com')
  
  expect (newManager.id).toBe('20002')
  expect (newManager.name).toBe('Shaggy')
  expect (newManager.email).toBe('Rogers@gmail.com')
});