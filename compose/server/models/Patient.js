const { Schema, model } = require("mongoose");

const patientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rut: {
        type: Number,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    }
},{
	timestamps: true,
	versionKey: false
});

module.exports = model('Patient', patientSchema);