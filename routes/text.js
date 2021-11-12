var express = require('express');
const text_controlers= require('../controllers/text');
var router = express.Router();

/* GET Text */ 
router.get('/', text_controlers.text_view_all_Page );
module.exports = router;

// GET request for one costume.
router.get('/text/:id', text_controlers.text_detail);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('text', { title: 'Search Result : Text' });
});

module.exports = router;