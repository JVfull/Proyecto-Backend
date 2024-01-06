const   express     = require("express");
const   logger      = require("morgan");
const   indexRouter = require("./router/index");
const   apiRouter   = require("./router/api");
const { connect }   = require("./db/connect");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use("/index", indexRouter);
app.use("/api", apiRouter);
connect();

module.exports = app;