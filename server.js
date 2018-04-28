const express = require("express" );
const bodyparser =  require("body-parser");
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const api = require("./server/routing/api");
app.use("/api",api);

const auth = require("./server/routing/auth");
app.use("/auth",auth);



app.listen(3000);
