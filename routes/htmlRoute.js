const path = require("path");
const router = require("express").Router();


//routes to the notes page if the url ends with /notes
router.get("/notes", (req, res) =>{

    res.sendFile(path.join(_dirname, "../public/notes.html"));
});



//routes to the index page if the router ends with anything besides /notes
router.get("*", (req, res) =>{

    res.sendFile(path.join(_dirname, "../public/index.html"))
});


module.exports = router;