var mongoose = require("mongoose")

var schema = mongoose.Schema
var GenreSchema = new schema({
	name: {type: String, required: true}
})

GenreSchema
	.virtual("url")
	.get(function(){
		return 'genre/' + this._id
	})


	module.exports = mongoose.model('Genre', GenreSchema)


