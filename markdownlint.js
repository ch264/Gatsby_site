var fs = require('fs');
var contents = fs.readFileSync('test.md', 'utf8');
console.log("contents", contents);

const markdownlint = require("markdownlint");

const options = {
  "files": [ "ga-site/test2.md", "test.md" ],
  "strings": {
    "good.string": "# good.string\n\nThis string passes all rules.",
    "bad.string": "#bad.string\n\n#This string fails\tsome rules."
  }
};

markdownlint(options, function callback(err, result) {
  console.log("result", result)
  if (!err) {
    console.log(result.toString());
  }
});
