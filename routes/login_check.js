function isValidRedirect(redirectUrl) {
    const validRedirectUrls = ['https:/validRedirectUrl1.com', 'https:/validRedirectUrl2.com', ];
    return validRedirectUrls.indexOf(redirectUrl) > -1;
}

function check_logged(req, res) {

    if (req.session.logged == undefined || req.session.logged == false)
    {
        if (isValidRedirect(req.url)) {
            res.redirect("/login?returnurl=" + req.url);
        }
    }
}

module.exports = check_logged;