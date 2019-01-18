const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

const db = require("./models");
const session = require("express-session");
const passport = require("./config/passport");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let syncOptions = { force: true };
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  syncOptions = {};
}

app.use(
  session({ secret: "zoopocalypse", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

db.sequelize.sync(syncOptions).then(() => {
  console.log(Object.keys(db));
  db.User.create({ username: "asdf", password: "asdf" }).then(() => {
    app.listen(PORT, () => {
      console.log(`🌎 ==> API server now on port ${PORT}!`);
    });
  });
});
