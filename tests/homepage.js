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
     asos.navigate().search(searchquery)
     .waitForElementVisible('@searchresult', 2000)
     asos.assert.visible('@searchresult')
     asos.assert.urlContains(searchquery)
    },
    'Add item to basket and checkout' : function(browser){
      let searchquery = 'bikini';
      let asos = browser.page.asoshomepage();
      asos.navigate().setValue('@searchBox', searchquery).submit().add()
      browser.end(); //closes browser 
    }
};
    