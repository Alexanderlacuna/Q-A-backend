exports.register=(req,res,next)=>{

	let newUser={
		email:req.body.email,
		password:req.body.password
	}

	jsonData.unshift(newUser)
	return res.status(201).json({
		message:"Succesfully created new user"
	})
}

exports.login=(req,res,next)=>{
	
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
}