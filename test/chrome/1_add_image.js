
//var conf = require('../../nightWatch.conf.js');
module.exports = {
    'Demo imgur Google' : function (client) {
        client
            .url('http://imgur.com/')
            .waitForElementVisible('body', 1000)
            .assert.title('Imgur: The most awesome images on the Internet')

            .click('a[class = "topbar-icon signin-register "]')

            .setValue('input[id="username"]', 'cybercoders23')
            .pause(100)
            .setValue('input[id="password"]', 'Keepcalm23')
            .pause(100)
            .click('button[type="submit"]')
            .assert.title('Imgur: The most awesome images on the Internet')
            .pause(1000)
            .click('span[class="upload-btn-text"]')
            .setValue('input[type="file"]',require('path').resolve('sachin.jpeg'))
            .pause(1000)
            .setValue('h1[class="post-title post-contenteditable"]','sachinramesh')
            .pause(1000)
            .setValue('div[class="post-image-description post-image-description--editable post-contenteditable"]','#godofcricket11')
            .pause(1000)
            .click('a[class="post-options-publish btn btn-action"]')

            .pause(1000);


    }
};

