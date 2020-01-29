# Protractor Example using Direct Connect

## Run e2e tests

Since property `directConnect` is `true` in `protractor-conf.js` file the protractor communicates directly with Chrome Driver or Firefox Driver, bypassing any Selenium Server:
```shell
npm test
```

## Run e2e tests in headless mode

Just add the following configuration in `protractor-conf.js` file to run the headless mode

```javascript
exports.config = {
    //...
    // it will use chrome driver directly in headless mode 
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        }
    }
    //...
}
``` 

## References

* https://www.protractortest.org/#/tutorial
* https://www.protractortest.org/#/browser-setup#using-headless-chrome
* https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular-on-page-load
* [AngularJS End to End testing with Protractor Episode 001]

[AngularJS End to End testing with Protractor Episode 001]: https://www.youtube.com/watch?v=SPTzxva2hiE&t=1s