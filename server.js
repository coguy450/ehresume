var express = require('express');
var app = express();
var swig = require('swig');
app.set('view engine', 'html');
app.set('view options', {
    layout: false
});
app.engine('html', swig.renderFile);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function(request, response) {
    response.render('index')
});
app.get('/vueYou', (req, res) => {
  res.status(200).send("Hi Vue you");
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
