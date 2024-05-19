const path = require("path");
const express = require("express");
const session = require("express-session");
const routes = require("./routes");
const cors = require("cors");
const initializeSocket = require("../server/utils/socket");
const http = require("http");
// const authenticateToken = require("../server/utils/jwt");
const app = express();
const server = http.createServer(app);
const io = initializeSocket(server);

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
app.use(routes);
app.use(initializeSocket);

app.get("*", function (req, res) {
  res.status(404).send("404 - Page not found, please try again.");
});

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log("Now listening"));
});
