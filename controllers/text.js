var text = require('../models/text');
// List of all text
exports.text_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Text list');
};
// for a specific text
exports.text_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Text detail: ' + req.params.id);
};



// Handle text create on POST.
exports.text_create_post = async function (req, res) {
    console.log(req.body)
    let document = new text();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.Color = req.body.Color;
    document.Font = req.body.Font;
    document.Size = req.body.Size;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle text delete form on DELETE.
exports.text_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Text delete DELETE ' + req.params.id);
};
// Handle text update form on PUT.
exports.text_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Text update PUT' + req.params.id);
};

// Handle Costume update form on PUT.
exports.text_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Costume.findById( req.params.id)
 // Do updates of properties
 if(req.body.Color)
 toUpdate.Color = req.body.Color;
 if(req.body.Font) toUpdate.Font = req.body.Font;
 if(req.body.Size) toUpdate.Size = req.body.Size;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// List of all text
exports.text_list = async function (req, res) {
    try {
        thetext = await text.find();
        res.send(thetext);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.text_view_all_Page = async function (req, res) {
    try {
        theGas = await text.find();
        res.render('text', {
            title: 'text Search Results',
            results: thetext
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Costume.
exports.text_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await text.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };