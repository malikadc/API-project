const express = require("express");
const app = express();
const parser = require("body-parser");

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.get("/", (req, res) => res.redirect("/api/event"))

app.use("/api/event", require("./routes/event.js"))


app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});