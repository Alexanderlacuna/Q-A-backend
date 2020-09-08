
const jwt=require("jsonwebtoken")

const bcrypt=require("bcryptjs")




// hash password

exports.hashPassword=(req,res,next)=>{


	bcrypt.hash(req.body.password,10,(err,hash)=>{
		if(hash ){

			req.body.password=hash


			console.log(hash)


			
			next()

		}

		else{
			res.status(401).json({
				messsage:"wrong password or email"
			})
		}
	})


}

exports.registerUser=(req,res,next)=>{

	if (req.body.email && req.body.password) {

		next()
	}

	else{

		res.status(401).json({
			message:"email or password are missing"
		})
	}


}


// check if user in database
exports.userExist=(req,res,next)=>{

	if (req.body.email) {

		next()


	}

	else{
		res.json({message:"email is missing"})
	}

}

exports.verifyToken=(req,res,next)=>{

	if(req.query.token){

		jwt.verify(req.query.token,"Secret",(error,response)=>{

			console.log(error)

			if (!error) {


				
				next()
			}

		
		})



	}

	return  res.status(401).json({
		message:"Auth failed"
	})


	


    
}