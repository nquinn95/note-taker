const path = require("path");
const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");








//links the notes page file to the databason in db.json
router.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, "../db/db.json"));
});


//gets specific notes by id
router.get("/notes:id", (req, res) => {
    let noteId = req.params.id;

    fs.readFile("..db/db.json")
    .then(data => {
        data = JSON.parse(data);
        if (noteId != data){
            return res.json("No note with this Id");
        }
    })
});



//going to create a post route so that changes made to the note taker file are applied to the database
router.post("/notes", (req, res) => {
    //creating a variable for title and text of each note
    const {title, text} = req.body; 
    
    //creating a note variable so that when we use fs to write the into the file it will have a template
    let note = {
        title,
        text,
        id: uuidv4()
    }
    
    if(note){
        fs.readFile(__dirname, "../db/db.json"), 'utf-8', (err, data) =>{
            noteData = JSON.parse(data);

            noteData.push(note);
            console.log(noteData);

            fs.writeFile(__dirname, "../db/db.json"), JSON.stringify(noteData), (err) =>{
                if (err) throw (err);
            }   
        }
        
    }

    

});




module.exports = router; 