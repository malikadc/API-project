const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");
const path = require('path');


app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

// app.get("/", (req, res) => res.redirect("/api/event"))
// app.get("/", (req, res) => res.redirect("/api/event"))
app.get('/',function(req,res) {
  // res.sendFile('/templates/index.html');
  res.sendFile(path.join(__dirname+'/templates/index.html'));
});
app.get('/list-events/',function(req,res) {
  // res.sendFile('/templates/index.html');
  res.sendFile(path.join(__dirname+'/templates/list-events.html'));
});
app.get('/create-event/',function(req,res) {
  // res.sendFile('/templates/index.html');
  res.sendFile(path.join(__dirname+'/templates/create-event.html'));
});

app.use("/api/event", require("./routes/event.js"))


app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});