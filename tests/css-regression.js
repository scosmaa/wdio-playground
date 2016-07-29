/**
 * Created by s.cosma on 29/07/2016.
 */
var webdriverio = require('webdriverio');
var webdrivercss = require('webdrivercss');

var client = webdriverio.remote({
    desiredCapabilities: {
        browserName: 'firefox'
    }
});

webdrivercss.init(client, {
    screenshotRoot: 'visual/baseline',
    failedComparisonsRoot: 'visual/failures',
});

client
    .init()
    .url('http://localhost:3000')
    .webdrivercss('login form', [{
        name: 'title',
        elem: 'h1'
    }])
    .end();