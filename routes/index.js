const express = require('express');
const router = express.Router();

/* GET home page. */

router.get('/users/:userId/books/:bookId', function(req, res) {
    res.send(req.params.bookId + "<br>" + req.params.userId);
});

router.get('/users/:userId/books/', function(req, res) {
    res.send("no book id");
});
router.get('/:colour', function(req, res, next) {
    res.render('index', { title: 'Web4R', colour: req.params.colour });
});



module.exports = router;