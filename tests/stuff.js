module.exports = {
    'Demo test' : function (browser) {
      browser
        .url(browser.launchUrl)
        
      browser.expect.element("#app").to.be.present
      browser.click('link text', "Login")
        .expect.element("h1").text.to.contain("Login")
    
    }
  };