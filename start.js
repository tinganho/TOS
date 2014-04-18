var express = require('express')
  , http = require('http')
  , requirejs = require('requirejs')
  , fs = require('fs');;

var app = express();

app.set('port', process.env.PORT || 3300);
// app.use(express.logger('dev'));
app.use(express.static(__dirname));

requirejs.config({
  baseUrl : __dirname,
  nodeRequire : require
});

var tmpl = requirejs('./public/templates/tmpl');

app.get('/about/terms', function(req, res) {
  var language = req.get('Accept-Language');
//  console.log(language);
  if(language == 'cn'){
    res.send(tmpl.html({
      content : fs.readFileSync('tos.html', 'utf8')
    }));
  }
  else{
    res.send(tmpl.html({
      content : fs.readFileSync('tos-en.html', 'utf8')
    }));
  }
})

http.createServer(app).listen(app.get('port'),function() {
  console.log('Server started on port: ' + app.get('port'));
});
