var express = require('express');
const text_controlers= require('../controllers/text');
var router = express.Router();

/* GET Text */ 
router.get('/', text_controlers.text_view_all_Page );
module.exports = router;

/* GET detail school page */

router.get("/detail", text_controlers.text_view_one_Page);
router.get('/create', text_controlers.text_create_Page);
router.get('/update', text_controlers.text_update_Page);
router.get('/delete', text_controlers.text_delete_Page);

// GET request for one costume.
router.get('/text/:id', text_controlers.text_detail);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('text', { title: 'Search Result : Text' });
});

module.exports = router;