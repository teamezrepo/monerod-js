const { MoneroDaemon } = require("./lib/js/monerod-js");

var monerod = new MoneroDaemon("localhost", 18081);

monerod.getBlockCount().then((result) => {
    console.log("Block count: " + result.count);
}).catch((err) => {
    console.log("Something went wrong: " + err);
});