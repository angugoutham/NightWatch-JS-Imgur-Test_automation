
const BINPATH = './node_modules/nightwatch/bin/';


module.exports = {
    "src_folders": [
        "test/firefox"
    ],
    "selenium": {
        "start_process": true,
        "server_path": "./node_modules/nightwatch/bin/selenium.jar",

        //"host": "0.0.0.0",
       // "port": 4444,
        "cli_args" : {
            "webdriver.gecko.driver" : "./node_modules/geckodriver/geckodriver"
        }
    },

    "test_settings": {
        "default": {
            "globals": {
                "waitForConditionTimeout": 5000
            },
            "desiredCapabilities": {
                "browserName": "firefox",
                "javascriptEnabled": true,
                "acceptSslCerts": true,
                "marionette": true


            }
        }

    }
}
