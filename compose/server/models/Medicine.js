const { Schema, model } = require("mongoose");

const medicineSchema = new Schema({
    serie: {
        type: Number,
        unique: true,
        required: true
    },
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