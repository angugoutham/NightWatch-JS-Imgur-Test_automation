

module.exports = {
    'Demo imgur Google' : function (client) {
        client
            .url('http://imgur.com/')
            .waitForElementVisible('body', 1000)
          //  .assert.title('Imgur: The most awesome images on the Internet')
            .pause(10000)
            .click('a[class = "topbar-icon signin-register "]')
            .pause(10000)
            .setValue('input[id="username"]', 'cybercoders23')
            .pause(10000)
            .setValue('input[id="password"]', 'Keepcalm23')
            .pause(10000)
            .click('button[type="submit"]')

            .click('span[class="upload-btn-text"]')
            .setValue('input[type="file"]',require('path').resolve('sachin.jpeg'))
            .pause(10000)
            .setValue('h1[class="post-title post-contenteditable"]','sachinramesh')
            .pause(10000)
            .setValue('div[class="post-image-description post-image-description--editable post-contenteditable"]','#nikil1222')
            .pause(10000)
            .click('a[class="post-options-publish btn btn-action"]')

            .pause(10000);


    }
};

