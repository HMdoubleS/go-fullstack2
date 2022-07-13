const express = require('express'); // imports framework
const mongoose = require('mongoose'); 

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

const app = express();

// connecting MongoDB Atlas
mongoose.connect('mongodb+srv://hannah:DN5w4XrdC8GBUeZg@cluster0.cem88.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');    
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });

// setting headers 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;


