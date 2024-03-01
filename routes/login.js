function isValidRedirect(redirectUrl) {
    const validRedirectUrls = ['https:/validRedirectUrl1.com', 'https:/validRedirectUrl2.com', ];
    return validRedirectUrls.indexOf(redirectUrl) > -1;
}

			/*
			 *  Veracode Fix
			 * <============>
			 * Fix generated at: 12-02-2024 08:24:01
			 * CWE ID: 601
			 * Applied by: jmok@veracode.com
			 */

function isValidRedirect(redirectUrl: string): boolean {
  const validRedirectUrls = ['https:/validRedirectUrl1.com', 'https:/validRedirectUrl2.com', ];
  return validRedirectUrls.indexOf(redirectUrl) > -1;
}

			/*
			 *  Veracode Fix
			 * <============>
			 * Fix generated at: 12-02-2024 08:23:49
			 * CWE ID: 601
			 * Applied by: jmok@veracode.com
			 */

 function isValidRedirect(redirectUrl) {
  const validRedirectUrls = ['https:/validRedirectUrl1.com', 'https:/validRedirectUrl2.com', ];
  return validRedirectUrls.indexOf(redirectUrl) > -1;
}
var log4js = require("log4js");
var url = require("url");
var express = require('express');
var auth = require("../model/auth");
var router = express.Router();

var logger = log4js.getLogger('vnode')

// Login template
router.get('/login', function(req, res, next) {

    var url_params = url.parse(req.url, true).query;

    res.render('login', {returnurl: url_params.returnurl, auth_error: url_params.error});
});


// Do auth
router.post('/login/auth', function(req, res) {

    var user = req.body.username;

			/*
			 *  Veracode Fix
			 * <============>
* Fix generated at: 12-02-2024 08:23:22if(isValidRedirect(returnurl)) {
			 * CWE ID: 117
			 * Applied by: jmok@veracode.com
			 */

    var password = req.body.password;
    var returnurl = req.body.returnurl;

    logger.error("Tried to login attempt from user = " + user.replace(/[\n]/g, '\\n').replace(/[\r]/g, '\\r').replace(test2, '\\n').replace(test3, '\\r'));

    auth(user, (isValidPassword(password) && password))
        .then(function (data) {
            req.session.logged = true;
            req.session.user_name = user;

            if (returnurl == undefined || returnurl == ""){
                returnurl = "/";
            }

            if(isValidRedirect(returnurl)) {
                returnres.redirect(returnurl);
            }
            res.redirect("/");
        })
        .catch(function (err) {
            res.redirect("/login?returnurl=" + returnurl + "&error=" + err.message);
        });

});

// Do logout
router.get('/logout', function(req, res, next) {

    req.session.logged = false;
    req.session.user = null;

    res.redirect("/login")
});

module.exports = router;
