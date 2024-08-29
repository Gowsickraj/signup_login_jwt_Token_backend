const express = require('express');
require("dotenv").config()
const cors =require("cors")
const node = require("node-rsa");
const router = require('./ROUTER/Router');
// const { urlencoded } = require('body-parser');
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/",router)
// const port = 5000
const PORT = process.env.PORT
app.use(cors())
// app.post('/api/method', (req, res) => {
//     console.log(req.body);

    // const key = nodersa({b:512})
    // console.log(key);
    // const encrypt = key.encrypt("Gowsick","base64")
    // console.log(encrypt);
    // const private = key.exportkey("Private")
    // const public =key.exportkey("Public")
    // //
    // const newkey = new nodersa(public)
    // //
    // const encryt =newkey.encrypt("hello","base64")
    // //
    // const nkey = new nodersa(private)
    // const decrypt =nkey.decrypt(encrypt,"utf8")
    // //

// });

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
});




