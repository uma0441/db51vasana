var text = require('../models/text');


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

// Handle Costume update form on PUT.
exports.text_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await text.findById( req.params.id)
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
        thetext = await text.find();
        res.render('text', {
            title: 'Text Search Results',
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

   // Handle Costume delete on DELETE.
exports.text_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await text.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.text_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await text.findById(req.query.id)
        res.render('textdetail',
            { title: 'Text Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.text_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('textcreate', { title: 'Text Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a Text. 
// query provides the id 
exports.text_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await text.findById(req.query.id)
        res.render('textupdate', { title: 'Text Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.text_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await text.findById(req.query.id)
    res.render('textdelete', { title: 'Text Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };