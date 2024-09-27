// calculator_steps.js

module.exports = function() {
  return actor({
    // Define custom steps here, use 'this' to access default methods of the actor.
    
    waitForNum1: function() {
      this.waitForElement('//*[@resource-id="com.gfg.calculator:id/num1"]', 10);
    },

    fillFieldsAndTap: function(num1, num2, button) {
      this.fillField('//*[@resource-id="com.gfg.calculator:id/num1"]', num1);
      this.wait(2);
      this.fillField('//*[@resource-id="com.gfg.calculator:id/num2"]', num2);
      this.wait(2);
      // Tap the button by its resource ID
      this.click(`//*[@resource-id="com.gfg.calculator:id/${button}"]`); 
    },

    checkResult: function(expectedResult) {
      this.waitForElement('//*[@resource-id="com.gfg.calculator:id/result"]', 10);
      this.see(expectedResult, '//*[@resource-id="com.gfg.calculator:id/result"]');
      this.wait(2);
    }
  } 
);
}
