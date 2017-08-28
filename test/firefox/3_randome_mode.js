

module.exports = {
    'Demo imgur Google' : function (client) {
        client
            .url('http://imgur.com/')
            .waitForElementVisible('body', 1000)
            .assert.title('Imgur: The most awesome images on the Internet')
            .pause(1000)
            .click('a[id = "random-button"]')
            .setValue('input[name="q"]', 'tag:Ribakadaba')
            .assert.urlContains('gallery')
            .pause(10000);


    }
};