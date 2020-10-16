const path = require('path');

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:30003/database_project', {
    useNewUrlParser: true
});

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
