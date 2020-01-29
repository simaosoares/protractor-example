# Protractor Example

## Install Protractor

Use npm to install Protractor **globally** and start selenium server with:
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
## Using Chrome Headless

Just checkout the branch [chrome-headless] and follow the instructions.

## Using Direct Connect

Just checkout the branch [direct-connect](https://github.com/simaosoares/protractor-example/tree/direct-connect) and follow the instructions.

## Running Protractor Locally

Checkout the branch [chrome-headless] and see the details in the `package.json` file.

## References

* https://www.protractortest.org/#/tutorial
* https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular-on-page-load
* [AngularJS End to End testing with Protractor Episode 001]

[AngularJS End to End testing with Protractor Episode 001]: https://www.youtube.com/watch?v=SPTzxva2hiE&t=1s
[chrome-headless]: https://github.com/simaosoares/protractor-example/tree/direct-connect