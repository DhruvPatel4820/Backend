const express =require("express");
const app = express();
// let port = 3000;
let port = 8080;
// console.log(app);

app.listen(port,()=>{
    console.log("app is listening on port",port);
})
app.get("/search",(req,res)=>{
    let {q}= req.query;
    if(!q){
        res.send("<h1>nothing searched</h1>")
    }
    res.send(`<h1>Search result for query: ${q}</h1>`);
    // res.send(`Search result for query: ${q}`);
    console.log(req.query);
    // res.send("no result");
})


// app.get("/:username/:id",(req,res)=>{
//     let {id,username} = req.params;//req.params hame batata h ki request ke sath kitne parameter aaye h
//     let htmlcode = `<h1> Welcome to the page of ${username}</h1>`;
//     res.send(htmlcode);
//     console.log(username);
//     console.log(id);
//    console.log(req.params);//ye req.params hame jo bhi username and id aayegi uska ek object banake print kar denge
//     // res.send("Hello! I am root.");
// })


// app.get("/",(req,res)=>{
//     // res.send("you have contacted to the root path");
//     res.send("Hello! I am root.");
// })
// app.get("/search",(req,res)=>{
//     res.send("you have contacted to the search path");
// })
// app.get("/help",(req,res)=>{
//     res.send("you have contacted to the help path");
// })
// app.get("/home",(req,res)=>{
//     res.send("you have contacted to the home path");
// })

// app.post("/",(req,res)=>{
//     res.send("you send a post request to root");
// })
// app.get("*",(req,res)=>{
//     res.send("this page does not exist");
// })

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request received");
//     // res.send("This is a basic responce"); // yaha pe hamne responce me ek String send kara h 
//     // res.send({
//     //     name:"Mango",
//     //     color:"yellow",
//     // })  // yaha pe hamne responce me ek object send kara h
//     let code = "<h1>Fruits</h1><ul><li>banana</li><li>mango</li></ul>";
//     res.send(code);
// });


// let express = require("express");
// let app = express();
// let port = 8080;
// app.listen(port,()=>{
//     console.log("web server created");
// })
// app.use((req,res)=>{
//     console.log("request receive");

//     res.send("hello my dear janvi");

// })

