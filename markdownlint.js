console.log("sanity check")

const markdownlint = require("markdownlint");

const options = {
  "files": [ "ga-site/test2.md", "test.md" ],
  "strings": {
    "good.string": "# good.string\n\nThis string passes all rules.",
    "bad.string": "#bad.string\n\n#This string fails\tsome rules."
  }
};

markdownlint(options, function callback(err, result) {
  console.log(result)
  if (!err) {
    console.log(result.toString());
  }
});
