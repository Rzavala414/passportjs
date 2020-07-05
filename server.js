const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.use('/auth', require('./routes/auth-routes'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));