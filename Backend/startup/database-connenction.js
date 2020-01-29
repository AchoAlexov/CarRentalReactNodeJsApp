const mongoose = require('mongoose');

function dbConection() {
    mongoose.connect('mongodb://localhost/rentalServices',{useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log('Connected to rentalServices database...'))
    .catch((err) => {
        console.log(err.message); 
        process.exit(1);
    });
}

module.exports = dbConection;