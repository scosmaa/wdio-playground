/**
 * Created by s.cosma on 29/07/2016.
 */
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
var browser = require('webdriverio').remote(options);

var webdrivercss = require('webdrivercss').init(browser, {
    screenshotRoot: 'webdrivercss-results/baseline',
    failedComparisonsRoot: 'webdrivercss-results/diffs',
    misMatchTolerance: 0.05,
    screenWidth: [1000]
});

describe('WebdriverCSS Test',function() {
    it('Test',function(done) {
        this.timeout(60000);
        browser
            .init()
            .url('http://www.google.com/')
            .webdrivercss('test',[
                {
                    name: 'element',

                }
            ], function(err,res) {
                assert.ok(res.element[0].isWithinMisMatchTolerance);
                done();
            })
            .end();
    });
});