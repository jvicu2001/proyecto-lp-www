const { Schema, model } = require("mongoose");

const medicineSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dose: Number,
    units: Number
},{
	timestamps: true,
	versionKey: false
});

module.exports = model('Medicine', medicineSchema);