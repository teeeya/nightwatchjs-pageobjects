'use strict';
module.exports = {
  'Load Homepage' : function (browser) {
    let asos = browser.page.asoshomepage(); //name of the page.js
    asos.navigate(); //navigates to url specified in page.js
    asos.assert.visible('@logo');//@values ref selectors specified in pages.js
    },
    'Search for bikini' : function(browser){
      let searchquery = 'bikini';

      let asos = browser.page.asoshomepage();
     asos.navigate()
     .setValue('@searchBox', searchquery)
     .click('@submit')
     .waitForElementVisible('@searchresult', 3000)
     .assert.visible('@searchresult')
     .assert.urlContains(searchquery)
      browser.end(); //closes browser
    }
};
    