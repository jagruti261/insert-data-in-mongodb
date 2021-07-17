const express = require('express')
const index = express();
const mongoose = require('mongoose');
const Usermodel = require('./models/nodejs')
mongoose.connect('mongodb+srv://new-user:NyfVs0A5ReE7VJRV@cluster0.2zo0v.mongodb.net/new-user?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const data = new Usermodel({
    _id: new mongoose.Types.ObjectId(),
    name: "text_insert",
    email: "test_insert@gmail.com"
});
data.save().then((results) => {
        console.log(results);
    })
    .catch(error => console.log(error))