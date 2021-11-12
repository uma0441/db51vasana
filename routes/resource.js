var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Text_controller = require('../controllers/text');

/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// Text ROUTES ///
// POST request for creating a Text.
router.post('/resource/text', Text_controller.text_create_post);
// DELETE request to delete Text.
router.delete('/resource/text/:id', Text_controller.text_delete);
// PUT request to update Text.
router.put('/resource/text/:id', Text_controller.text_update_put);
// GET request for one Text.
router.get('/resource/text/:id', Text_controller.text_detail);
// GET request for list of all Text items.
router.get('/resource/text', Text_controller.text_list);
module.exports = router;