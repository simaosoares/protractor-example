# Protractor Example

## Install Protractor

Use npm to install Protractor globally and start selenium server with:
```shell
npm install -g protractor
webdriver-manager update
webdriver-manager start
```

## Run e2e tests

Open a separated terminal and install the application dependencies: 
```shell
npm install
```

And finally run the tests with:
```shell
protractor protractor-conf.js
```

The npm script `npm test` is configured to run all the steps above: 
```shell
npm test
```

## References

* https://www.protractortest.org/#/tutorial
* https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular-on-page-load