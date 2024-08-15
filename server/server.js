const path = require("path");
const express = require("express");
const session = require("express-session");
const routes = require("./routes");
const cors = require("cors");
const initializeSocket = require("../server/utils/socket");
const http = require("http");
// const authenticateToken = require("../server/utils/jwt");
const cookieParser = require("cookie-parser");
const app = express();
const server = http.createServer(app);
const io = initializeSocket(server);
const passport = require("passport");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(cors());
app.use(session(sess));
// app.use(authenticateToken);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/videos", express.static(path.join(__dirname, "videos")));
app.use(routes);
app.use(cookieParser());
app.use(initializeSocket);
app.use(passport.initialize());
app.use(passport.session());

app.get("*", function (req, res) {
  res.status(404).send("404 - Page not found, please try again.");
});
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log("Now listening"));
});
