var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Text_controller = require('../controllers/text');

/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// gas ROUTES ///
// POST request for creating a Animal.
router.post('/resource/text', Text_controller.text_create_post);
// DELETE request to delete Animal.
router.delete('/resource/text/:id', Text_controller.text_delete);
// PUT request to update Animal.
router.put('/resource/text/:id', Text_controller.text_update_put);
// GET request for one Animal.
router.get('/resource/text/:id', Text_controller.text_detail);
// GET request for list of all Animal items.
router.get('/resource/text', Text_controller.text_list);
module.exports = router;