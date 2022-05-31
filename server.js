const express = require("express");


//routes
const apiRoute = require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute");

const app = express();
const PORT = process.env.PORT || 3001; 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoute);
app.use("/", htmlRoute);


app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


