exports.deleteQuestion=(req,res,next)=>{

}

exports.editQuestion=(req,res,next)=>{

}

exports.createQuestion=(req,res,next)=>{
	let newPost={
	id:"test",
	question:req.body.question  || undefined,
	answered:false,
	upvotes:0,

	creator_id:"sadhbasfbhewjfj"


}

data.unshift(newPost)

res.status(201).json({
	message:"successfully created data"
})
}

exports.