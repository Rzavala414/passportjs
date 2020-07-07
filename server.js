const express = require('express');
const mongoose = require('mongoose')
const keys = require('./config/keys')
const app = express();
const passportSetup = require('./config/passport-setup');

const PORT = process.env.PORT || 3000

mongoose.connect(keys.mongodb.dbURI, { 
    useNewUrlParser: true
     
} ,() => console.log('connected to db'))
    
app.set('view engine', 'ejs');
app.use('/auth', require('./routes/auth-routes'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));