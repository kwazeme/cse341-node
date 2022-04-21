#!javaxcript
// Parser constructor.
let Parser = function() {
};
// Parses the specified text.
Parser.prototype.parse = function(text) {
let results = {};
// Break up the file into lines.
    let lines = text.split('\n');
    lines.forEach(function(line) {
        let parts = line.split(' ');
        let letter = parts[1];
        let count = parseInt(parts[2]);
    if(!results[letter]) {
        results[letter] = 0;
    }
results[letter] += parseInt(count);   
    });
    return results
};
    // Export the Parser constructor form this module.
    module.exports = Parser;