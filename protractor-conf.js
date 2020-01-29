exports.config = {
    framework: 'jasmine',
    // if not defined, protractor will start the selenium standalone server automatically
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    // capabilities to be passed to the webdriver instance
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        }
    }
};