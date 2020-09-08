const mongoose=require("mongoose")
var  UserSchema=new mongoose.Schema({



	_id:mongoose.Schema.Types.ObjectId,

	email:{

		type:String,
		required:true
	},

	password:{

		type:String,
		required:true
	},

	admin:{

		type:Boolean,
		default:false
	},


	expert:{

		type:Boolean,

		default:false
	}




})

module.exports=mongoose.model("User",UserSchema)