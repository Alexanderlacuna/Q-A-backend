const mongoose=require("mongoose")

const questionSchema=mongoose.Schema({
     // 
	creatorId:{
		type:String,
		required:true
	},

	questionAsked:{
		type:String,

		required:true
	},



	answered:{
		type:Boolean,
		default:false
	}

})