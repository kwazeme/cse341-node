#!javascript
// Require my new parser.js file
let Parser = require('./parser')
// Load the fs (filesystem) module
let fs = require("fs");
// Read the contents of the file into memory.
fs.readFile("example.txt", function(err, logData) {
    // If an error occurred, throwing it will
    // display the exception and end our app
    if (err) throw err;
    // logData is a Buffer, convert to string
    let text = logData.toString();
    // let results = {};
    // // Break up the file into lines.
    // let lines = text.split('\n');
    // lines.forEach(function(line) {
    //     let parts = line.split(' ');
    //     let letter = parts[1];
    //     let count = parseInt(parts[2]);
    // if (!results[letter]) {
    //     results[letter] = 0;  
    // }
    // results[letter] += parseInt(count);
    // })
    
    // Create an instance of the Parser object.
    let parser = new Parser();
    // call the paese function.
    console.log(parser.parse(text));
    // {A: 2, B: 14, C: 6}
});