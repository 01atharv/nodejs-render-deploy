const express = require('express');
const app = express();



app.get('/api/get',(req,res)=>{
    res.send({message:"hello back to node server"})
});


app.get('/api/get_user_details',(req,res)=>{
    res.send({
        name:"Rana ji",
        age:21,
        contact:"123456789"
    })
});



app.listen(8000,()=>{
  console.log("Server is running on port 8000");
});
