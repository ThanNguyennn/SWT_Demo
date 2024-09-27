Feature('Calculator Operations');

Scenario('1.Test addition: 10 + 5 = 15', async ({ I }) => {
  I.waitForNum1();
  I.fillFieldsAndTap('10', '5', 'sum');
  I.checkResult('15');
});

Scenario('2.Test subtraction: 10 - 5 = 5', async ({ I }) => {
  I.waitForNum1();
  I.fillFieldsAndTap('10', '5', 'sub');
  I.checkResult('5');
});

Scenario('3.Test subtraction with negative result: 5 - 10 = -5', async ({ I }) => {
  I.waitForNum1();
  I.fillFieldsAndTap('5', '10', 'sub');
  I.checkResult('-5');
});

Scenario('4.Test multiplication: 10 * 5 = 50', async ({ I }) => {
  I.waitForNum1();
  I.fillFieldsAndTap('10', '5', 'mul');
  I.checkResult('50');
});

Scenario('5.Test division: 10 / 2 = 5', async ({ I }) => {
  I.waitForNum1();
  I.fillFieldsAndTap('10', '2', 'div');
  I.checkResult('5');
});

Scenario('6.Test modulus: 10 % 3 = 1', async ({ I }) => {
  I.waitForNum1();
  I.fillFieldsAndTap('10', '3', 'button');
  I.checkResult('1');
});

Scenario('7.Test addition with non-integer input: 1.0 + 5.0 = 6', async ({ I }) => {
  I.waitForNum1();
  I.fillFieldsAndTap('1.0', '5.0', 'sum');
  I.checkResult('6');
});



//appium --base-path=/wd/hub