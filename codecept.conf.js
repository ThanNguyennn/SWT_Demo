exports.config = {
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      app: "C:\\Users\\THAN\\AndroidStudioProjects\\Calculator\\app\\build\\outputs\\apk\\androidTest\\debug\\app-debug-androidTest.apk",
      platform: 'Android',
      device: 'emulator',
      desiredCapabilities: {
        appPackage: 'com.gfg.calculator',
        appActivity: 'com.gfg.calculator.MainActivity',
        deviceName: 'emulator-5554', 
        automationName: 'UiAutomator2', 
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  name: 'calculator-app'
};
