const express = require("express");
const app = express();

app.use(express.json());
require("dotenv").config();
app.use("/person",require("./routes/user"));
const dbConnect = require("./dbConnect");
dbConnect();


app.listen(process.env.PORT,(err)=> err 
? console.log(err)
: console.log("server is runnig..."+process.env.PORT));