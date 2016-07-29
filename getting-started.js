/**
 * Created by s.cosma on 29/07/2016.
 */
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        //browserName: 'MicrosoftEdge'
        //browserName: 'firefox'
        //browserName: 'internet explorer'
        browserName: 'chrome'
    }
};

webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
    console.log('Title was: ' + title);
})
    .end();