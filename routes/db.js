var mongoose = require("mongoose")

var mySchema = new mongoose.Schema({
	myDate: Date,
	myString: String
})

var modelName = mongoose.model(modelName, mySchema)

var instanceName =   new modelName({
	name: "Tzvi"
})

instanceName.save(function(err){
	if (err) return handleError(err)
})
