# Protractor Example using Headless Chrome

## Install Application Dependencies 

Install the required application dependencies with:
```shell
npm install 
```

## Run e2e tests

Before starting Protractor we need to make sure the Selenium Server is running so open a separate terminal window and run:
```shell
npm run start-selenium-server
```

Open another terminal and run the tests with:
```shell
npm test
```

## Start Selenium standalone server automatically

Uncomment property `seleniumAddress` in `protractor-conf.js` file and the Selenium Server will start automatically just with the command:
```shell
npm test
```

## References

* https://www.protractortest.org/#/tutorial
* https://www.protractortest.org/#/browser-setup#using-headless-chrome
* https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular-on-page-load
* [AngularJS End to End testing with Protractor Episode 001]

[AngularJS End to End testing with Protractor Episode 001]: https://www.youtube.com/watch?v=SPTzxva2hiE&t=1s