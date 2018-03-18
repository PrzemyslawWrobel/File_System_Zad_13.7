var fs = require('fs');


var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, data) {
  var fileContent = data;
  var fileList = "spisPlikow.txt";
  fs.writeFile(fileList, fileContent, function(err) {
    if (err) throw err;
    console.log("The file was succesfully saved!");
  }); 
});