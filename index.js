const express=require("express")
const app=express()
const port=5000 || process.env.PORT

var jwt=require("jsonwebtoken")

const userRoutes=require("./routes/user")
const questionRoutes=require("./routes/questions")
const mongoose=require("mongoose")

const User=require("./models/user")



// configure the database


const uri = "test";

mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology: true}).then((response)=>{

	console.log("connected to db")

	
}).catch((err)=>console.log("error has occurred"))




// call in middlewares





app.use(express.json())
app.use(express.urlencoded({extended:false}))




app.get("/",(req,res,next)=>{

	res.send("hello world")


})




// registering new user


app.use("/api/user",userRoutes)

app.use("/api/questions",questionRoutes)

// login new user




// dealing with errors







	



app.listen(port,()=>console.log(`server started on port ${port}`))