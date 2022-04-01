var express = require('express');
var router = express.Router();


//* GET book page. */
router.get('/', function(req, res, next) {
  res.render('model');
});


//* GET web page. */
router.get('/we', function(req, res, next) {
  res.render('webpage');
});


//* GET kamila page. */
router.get('/kamilapage', function(req, res, next) {
  res.render('kamila');
});


//* GET kamila page. */
router.get('/polinapage', function(req, res, next) {
  res.render('webpage');
});

//* GET animation page. */
router.get('/ani', function(req, res, next) {
  res.render('animation');
});

//* GET imaging page. */
router.get('/img', function(req, res, next) {
  res.render('imaging');
});


//* GET sidebar page. */
router.get('/side', function(req, res, next) {
  res.render('sidebar');
});


//* GET mor page. */
router.get('/mor', function(req, res, next) {
  res.render('morton');
});




module.exports = router;


