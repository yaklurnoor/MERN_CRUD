
const mongoose = require("mongoose");


const DB = "mongodb+srv://muser:muser123@cluster0.tczk7cl.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log(" DB connection start !!")).catch((error)=> console.log(error.message)); 

