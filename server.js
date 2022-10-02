import express from "express";
const app = express();
import cors from "cors";
import { listFiles,uploadFile} from "./app.js"
import bodyParser from "body-parser"



app.use(express.json({limit:"150mb"}));
app.use(express.urlencoded({extended:true}));

app.use( cors() );

//app.use(bodyParser.urlencoded({ extended: true }));


app.post("/file",async (req,res)=>{

     const {file} = req.body;

     await uploadFile(file,"1sKW3JTZ3Bk62f31xIuS0s_4BDxCbDmwS");

     return res.send("ok");
})

app.get("/file",(req,res)=>{

    const { idFolder } = req.query;
    console.log({idFolder});
    return res.send("ok");

})

app.listen(3000,()=>{
    console.log("Server Listening in port 3000");
})