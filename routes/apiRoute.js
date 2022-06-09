const path = require("path");
const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils')








//links the notes page file to the databason in db.json
router.get("/notes", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});


//gets specific notes by id
router.get("/notes:id", (req, res) => {
    let noteId = req.params.id;

    readFromFile("./db/db.json")
        .then(data => {
            data = JSON.parse(data);
            if (noteId != data) {
                return res.json("No note with this Id");
            }
        })
        .then((json) => {
            const result = json.filter((note) => note.id === noteId);
            return result.length > 0
                ? res.json(result) : res.json('No notes match that ID');
        });
})
//going to create a post route so that changes made to the note taker file are applied to the database
router.post("/notes", (req, res) => {
    //creating a variable for title and text of each note
    const { title, text, id } = req.body;

    //creating a note variable so that when we use fs to write the into the file it will have a template
    let validNote = {
        title,
        text,
        id: uuidv4()
    };

    //used read and append to json file write the saved note to the json file
    if (req.body) {
        readAndAppend(validNote, "./db/db.json")
        .then(result => {
            res.json(result)
        });
            // noteData = JSON.parse(data);

            // noteData.push(note);
            // console.log(noteData);


            // writeToFile(__dirname, "./db/db.json"), JSON.stringify(noteData), (err) =>{
            //     if (err) throw (err);
            // }
        
    }else{
        res.error("note not saving")}
});

module.exports = router; 