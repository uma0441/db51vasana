var express = require('express');
const text_controlers= require('../controllers/text');
var router = express.Router();

/* GET Home Page Text */ 
router.get('/', text_controlers.text_view_all_Page );
module.exports = router;

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
  }

/* GET detail school page */

router.get("/detail", text_controlers.text_view_one_Page);
router.get('/create',secured, text_controlers.text_create_Page);
router.get('/update',secured, text_controlers.text_update_Page);
router.get('/delete',secured, text_controlers.text_delete_Page);


module.exports = router;