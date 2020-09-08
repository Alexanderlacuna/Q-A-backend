const router=require("express").Router()

const User=require("../models/user")

const jwt=require("jsonwebtoken")
const {registerUser,userExist,verifyToken,hashPassword}=require("../middlewares/index")

let jsonData=[{
	email:"alexander",
	password:20
}]


router.get("/json",verifyToken,(req,res)=>res.json(jsonData))
router.post("/register",registerUser,hashPassword,(req,res)=>{

	let newUser={
		email:req.body.email,
		password:req.body.password
	}

	jsonData.unshift(newUser)
	return res.status(201).json({
		message:"Succesfully created new user"
	})
})


router.post("/login",userExist,(req,res,next)=>{

	let token=jwt.sign({
		data:req.body.email},

		"Secret",
		{
			expiresIn:30*60
		}

	)


	res.json({
		token
	})

})

module.exports=router