var scrapeIt = require("scrape-it");
var jsonfile = require('jsonfile');

var file = 'scrdata.json';

scrapeIt("http://www.billboard.com/charts/hot-100", {
    title: "head title"
  ,content: "h2"
  , avatar: {
        selector: ".site-header__brand img"
        ,attr: "src"
    }
}).then(function(page) {
    console.log(page);
    jsonfile.writeFile(file,page,{spaces:2},function(err){
        console.error(err)

    });
});