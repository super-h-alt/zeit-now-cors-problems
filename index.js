// init required vars for project
const express = require('express'), app = express(),
	  bodyParser = require('body-parser'),
	  helmet = require('helmet'),
	  cors = require('cors');

// Configure bodyparser to handle POST requests
// a must-have for POST-requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// enable cors
app.use(cors());
app.options('/user/login', cors())

app.use(helmet()); // use Helmet package for security to protect (https://github.com/helmetjs/helmet)

app.post('/user/login', function(req, res){
    res.status(200).json({ result: "error", response: req.body });
});

// app listen on port 3000
app.listen(3000);
