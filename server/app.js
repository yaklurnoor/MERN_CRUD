require("dotenv").config();
const express =  require("express");
const app = express();
require("./db/conn");
const users = require("./object/userSchema");
const router = require("./routerss/router");
const cors = require("cors");
app.use(express.json());
app.use(router);
const port = 8003;

app.listen(port,()=> {
console.log("Server start ");
});