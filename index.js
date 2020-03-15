const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middlewear/logger");
const members = require("./Members");

const app = express();

//init Middlewear
// app.use(logger)

//Handlebars Middlewear
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Middlewear bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Homepage Route
app.get("/", (req, res) => {
  res.render("index", {
    title: "Member App",
    members
  });
});

//Set a static folder

app.use(express.static(path.join(__dirname, "public")));

// Members routes
app.use("/api/members", require("./routes/apis/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
