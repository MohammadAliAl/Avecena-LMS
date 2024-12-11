const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.get('/about-us', function (req,res) {
    res.render('about-us');
})
app.listen(3000);