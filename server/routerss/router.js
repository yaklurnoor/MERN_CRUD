const express = require("express");
const router = express.Router();
const users = require("../object/userSchema");
// router.get("/",(req,res) => {
//     log.console("reuter connect")
// });

router.post("/register", async (req,res) => {   
    console.log(req.body);
    const { name,email,age,mobile,work,add,desc } = req.body;

    try {
        
        const preuser = await users.findOne({email:email});
       
        console.log(preuser);

        if(preuser){
            res.status(422).json("this is user is already present");
        }else{
           
            const adduser = new users({
                name,email,age,mobile,work,add,desc
            });
           
            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        console.log(error);
        res.status(422).json(error);
    }
   
})
module.exports = router;
