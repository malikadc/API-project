const express = require("express");
const app = express();
const parser = require("body-parser");

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.get("/", (req, res) => res.redirect("/api/event"))

app.use("/api/event", require("./routes/event.js"))


app.listen(4000, () => {
  console.log("app listening on port 4000");
});