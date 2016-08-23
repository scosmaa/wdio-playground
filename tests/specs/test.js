/**
 * Created by s.cosma on 29/07/2016.
 */
var webdriverio = require('webdriverio');
var webdrivercss = require('webdrivercss');

var browsers = ['internet explorer', 'chrome', 'firefox','MicrosoftEdge'];

browsers.forEach(function (element) {
    var client = webdriverio.remote({
        desiredCapabilities: {
            browserName: element
        }
    });

    webdrivercss.init(client, {
        screenshotRoot: ['frontend-testing-comparative-',element].join(''),
        api: 'http://localhost:8080/api/repositories/'
    });

    client
        .init()
        .url('http://localhost:3000')
        .webdrivercss('login form', [{
            name: 'title',
            elem: 'h1'
        }])
        .sync()
        .end();
});


