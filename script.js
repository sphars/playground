const fs = require("fs");

// write a sample file containing javascript
const configString = `module.exports={apps:[{key1:'value',key2:['string-1','string-2','string-3','string-4']}]};`;
fs.writeFileSync("test.config.js", configString);
