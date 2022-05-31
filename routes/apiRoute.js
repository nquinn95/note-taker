const path = require("path");
const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");




//creating a variable for title and text of each note
let body = {title, text};



//links the notes page file to the databason in db.json
router.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, "../db/db.json"));
});


//going to create a post route so that changes made to the note taker file are applied to the database
router.post("/notes"< ({body}, res) => {

})




module.exports = router; 