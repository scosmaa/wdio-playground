/**
 * Created by s.cosma on 29/07/2016.
 */
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        //browserName: 'MicrosoftEdge',
        //browserName: 'firefox'
        //browserName: 'internet explorer'
        browserName: 'chrome'
       //waitforTimeout:50000,
        //waitforInterval: 50000,
        //pageLoadStrategy: 'none'
    }
};

webdriverio
    .remote(options)
    .init()
    .url('http://localhost:63342/DojoPlayground/gridx.html')
    .getTitle().then(function(title) {
    console.log('Title was: ' + title);
})
    .end();