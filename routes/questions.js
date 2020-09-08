const router=require("express").Router()
const Question=require("../models/question")
const {deleteQuestion,
editQuestion,
createQuestion}=require("../controller/questionController")
let data=[

{
	id:"alexis",
	question:"who was the first us president",
	answered:false,
	upvotes:0
},
{
	id:"dennis",
	question:"who am i",
	answered:false,
	upvotes:0
},
{
	id:"deriko",
	question:"who are your parents",
	answered:false,
	upvotes:0
}


]

const {verifyToken}=require("../middlewares/index")
router.get("/",(req,res,next)=>{

	res.status(200).json({
		data
	})


})


// make sure that the user has got id param
// check in datababe if the use exists and give a pass the user should also be authenticated


router.post("/",verifyToken,(req,res,next)=>{

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


// edit  question

router.post("/edit",(req,res,next)=>{
	// code to edit the question
	// create middlewares to check for the role


})

router.delete("/delete",(req,res,next)=>{
	// check if question with id exists validate user or their role
})
// delete the question




	// push the post to the database

	// upvotes:counter









})
module.exports=router