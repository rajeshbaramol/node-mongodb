var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());

app.all ('/ ', function (req, res) {
  if (!req.body) {
  	console.log ('No Body\n');
  	res.send ('error');
  }
  else {
  	console.log (' Received [' + req.method + ']:[' + JSON.stringify(req.body) + ']\n');
      res.send ('Orders will be created - please check the outputlog in the same bucket');
  }
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
}); 