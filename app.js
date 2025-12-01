const express= require('express');
const app = express();

//connecting a database
const mongoose= require('mongoose');
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust"

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await moongoose.connect(MONGO_URL);
}

app.get("/",(req,res)=>{
    res.send("Hi, I am root");
});

app.listen(8080,()=>{
    console.log("server is listening to 8080");
});