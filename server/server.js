const path = require("path");
const express = require("express");
const session = require("express-session");
const routes = require("./routes");
const cors = require("cors");
// const authenticateToken = require("../server/utils/jwt");
const app = express();
const http = require("http").Server(app);

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

app.use(routes);

const socketIo = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});
socketIo.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});
app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.get("*", function (req, res) {
  res.status(404).send("404 - Page not found, please try again.");
});

sequelize.sync({ force: false }).then(() => {
  http.listen(PORT, () => console.log("Now listening"));
});
