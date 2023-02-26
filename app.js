let express = require("express");
let app = express();


app.get("/",(req,res)=> {
	res.send("Welcome to Simple Express JS Application with EC2 instance");
})
app.get("/user/:name",(req,res)=> {
	let name = req.params.name;
	res.send("Welcome to Simple Express JS Application user "+name);
})

app.listen(9090,()=>console.log("Server running on port number 9090"))
