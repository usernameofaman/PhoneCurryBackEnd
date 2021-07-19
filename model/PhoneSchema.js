const mongoose = require('mongoose')

const PhoneSchema = new mongoose.Schema(
	{
		Name: { type: String, required: false, unique: false },
		Model: {type: String, required: false, unique: false},
		Brand: {type: String, required: false, unique: false},
		Price: {type: Number, required: false, unique: false},
		ReleaseData: {type: String, required: false, unique: false},
		Specification: {
            DisplayRes: {type: String, required: false, unique: false},
            DisplayType: {type: String, required: false, unique: false},
            Ram: {type: String, required: false, unique: false},
            Weight: {type: String, required: false, unique: false},
            Os: {type: String, required: false, unique: false},
            InternalMemory: {type: String, required: false, unique: false},
            ExternalMemory: {type: String, required: false, unique: false},
            CameraMain: {type: String, required: false, unique: false},
            CameraSecondary: {type: String, required: false, unique: false},
            CameraFront: {type: String, required: false, unique: false},
			CameraVideoRes:{type: String, required: false, unique: false},
			Weight:{type: String, required: false, unique: false},
			is5G:{type: Boolean}
        }
	},
	{ collection: 'phones' }
)

const model = mongoose.model('PhoneSchema', PhoneSchema)

module.exports = model
