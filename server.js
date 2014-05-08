var express = require('express'),
		stylus = require('stylus'),
    _ = require('lodash'),
		app = express();

app.use(stylus.middleware({
  debug: true,
  src: __dirname
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.status(200).sendfile('index.html');
});

var users = [
  {
    id: 0,
    name: 'Simi',
    gender: 'female'
  },
  {
    id: 1,
    name: 'Justin',
    gender: 'male'
  }
];

app.get('/users', function(req, res){
  console.log('/users');
  res.send(users);
});

app.get('/users/:id', function(req, res){
  console.log('/users/:id');
  console.log(req.params.id, _(users).find({id: +req.params.id}));
  res.send(_(users).find({id: +req.params.id}));
});

app.listen(8000);

console.log('Listening on port 8000');
