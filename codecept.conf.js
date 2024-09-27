exports.config = {
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      app: "C:\\Users\\THAN\\AndroidStudioProjects\\Calculator\\app\\build\\outputs\\apk\\androidTest\\debug\\app-debug-androidTest.apk",//change the path to your apk file, remember to install the app on your device or emulator first
      platform: 'Android',
      device: 'emulator',
      desiredCapabilities: {
        appPackage: 'com.gfg.calculator',
        appActivity: 'com.gfg.calculator.MainActivity',
        deviceName: 'emulator-5554',  //change to your device name or emulator name // adb devices for device name on Android Studio
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
