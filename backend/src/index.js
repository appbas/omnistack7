const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://rocketseatweek7:@@Rocket@@.@cluster0-uywmr.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});


app.use(require('./routes'));

app.listen(3333);