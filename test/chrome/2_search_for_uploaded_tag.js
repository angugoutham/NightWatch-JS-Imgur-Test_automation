//var conf = require('../../nightWatch.conf.js');
module.exports = {
    'Demo imgur Google' : function (client) {
        client
            .url('http://imgur.com/')
            .waitForElementVisible('body', 1000)
            .assert.title('Imgur: The most awesome images on the Internet')

            .click('div[class = "icon-search"]')
            .setValue('input[name="q"]', 'tag:godofcricket11')
            .pause(10000)
            .click('div[class = "icon-search searchable"]')

            .pause(1000);


    }
};

