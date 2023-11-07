const mongoose = require("mongoose");

var mongoURL ='mongodb+srv://abdullanihad232:Nihad123@cluster0.uaqfl1o.mongodb.net/mern-pizza'

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('connected', () => {
    console.log('Database Connection successfully');
});

db.on('error', (error) => {
    console.log('Mongo db connection failed:', error);
});

module.exports = mongoose;


