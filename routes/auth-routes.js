const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login');
})

// auth with google
router.get('/google', (req, res) => {

});

module.exports = router;