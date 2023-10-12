// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("retrun an object with a key of organization: 'is nonprofit'", function(){
expect(launchcode.organization).toBe('nonprofit');
  });

  test("return executiveDirector : 'Jeff'", function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("return percentageCoolEmployees : '100'", function(){
    expect(launchcode.percentageCoolEmpolyees).toBe(100);
  });
 test("return programsOffered gives an array", function(){
  expect(launchcode.programsOffered[0]).toBe(1);
  expect(launchcode.programsOffered[1]).toBe(2);
  expect(launchcode.programsOffered[2]).toBe(3);
  expect(launchcode.programsOffered.length).toBe(3);
 })
test("launchOutput returns 'Launch!' when given an number only divisable by 2", function(){
  let number = 2
  expect(launchcode.launchOutput(number)).toBe("Launch!");
})
test("launchOutput returns 'Code!' when given an number only divisable by 2", function(){
  let number = 3
  expect(launchcode.launchOutput(number)).toBe("Code!");
})
test("launchOutput returns 'Rocks!' when given an number only divisable by 5", function(){
  let number = 5
  expect(launchcode.launchOutput(number)).toBe("Rocks!");
})
test("launchOutput returns 'LaunchCode!' when given an number only divisable by 2 and 3", function(){
  let number = 6
  expect(launchcode.launchOutput(number)).toBe("LaunchCode!");
})
test("launchOutput returns 'Code Rocks!' when given an number only divisable by 3 and 5", function(){
  let number = 15
  expect(launchcode.launchOutput(number)).toBe("Code Rocks!");
})
test("launchOutput returns 'Launch Rocks!' when given an number only divisable by 2 and 5", function(){
    let number = 10
    expect(launchcode.launchOutput(number)).toBe("Launch Rocks! (CRASH!!!!)");
})
test("launchOutput returns 'LaunchCode Rocks!' when given an number only divisable by 2,3 and 5", function(){
  let number = 30
  expect(launchcode.launchOutput(number)).toBe("LaunchCode Rocks!");
})
test("launchOutput returns 'Rutabagas! That doesn't work.' when given an number not divisable by 2,3 or 5", function(){
  let number = 7
  expect(launchcode.launchOutput(number)).toBe("Rutabagas! That doesn't work");
})
})
