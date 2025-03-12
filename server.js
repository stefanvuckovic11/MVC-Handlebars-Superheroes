var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

var superheroRoutes = require('./routes/superheroRoutes');
var antiheroRoutes = require('./routes/antiheroRoutes');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use('/', superheroRoutes);
app.use('/antiheroes', antiheroRoutes);

app.listen(PORT, function() {
    console.log('Server is running on http://localhost:' + PORT);
});
