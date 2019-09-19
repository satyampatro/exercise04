var express = require('express');
var port = process.env.PORT || 5467;
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: '15Mb' }));
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '15Mb'
}));


// Add Routes
app.use('/', require('./routes'));

// server init
app.listen(port);
console.log(`App listening on port ${port}`);