var express = require('express');
const request = require('request');
var app = express();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('',express.static(__dirname + '/views'));





app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/main', function (req, res) {
  res.render('main.html');
});

app.get('/api/update/btc', function (req, res) {
	request('https://api.bithumb.com/public/ticker/btc', function (error, response, body) {
	  res.json(response);
	});
});
app.get('/api/update/eth', function (req, res) {
	request('https://api.bithumb.com/public/ticker/eth', function (error, response, body) {
	  res.json(response);
	});
});
app.get('/api/update/xrp', function (req, res) {
	request('https://api.bithumb.com/public/ticker/xrp', function (error, response, body) {
	  res.json(response);
	});
});
app.get('/api/update/bch', function (req, res) {
	request('https://api.bithumb.com/public/ticker/bch', function (error, response, body) {
	  res.json(response);
	});
});
app.get('/api/update/ltc', function (req, res) {
	request('https://api.bithumb.com/public/ticker/ltc', function (error, response, body) {
	  res.json(response);
	});
});

app.listen(5022, function () {
  console.log('howatch~!!');
});
