"use strict";

const express = require("express"),
  layouts = require("express-ejs-layouts"),
  router = require("./routes/index"),
  mongoose = require("mongoose"),
  path = require('path'),
  methodOverride = require("method-override"),
  passport = require("passport"),
  cookieParser = require("cookie-parser"),
  expressSession = require("express-session"),
  expressValidator = require("express-validator"),
  connectFlash = require("connect-flash"),
  morgan = require("morgan"),
  User = require("./models/user"),
  bodyParser = require('body-parser'),
  demoask = require("./models/demoask");



mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/emaillist",
  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false}
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we are connected!!!")
});

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"]
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(morgan("combined"));
app.use(layouts);
app.use(express.static("public"));
app.use(expressValidator());
app.use(connectFlash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", router);


app.use(express.static(path.join(__dirname, 'public')));



const server = app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
  }),
  io = require("socket.io")(server),
  chatController = require("./controllers/chatController")(io);
