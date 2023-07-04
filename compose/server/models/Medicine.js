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
    stock: Number,
    critical_stock: Number,
    content: String,
    lab: String,
    method: String


},{
	timestamps: true,
	versionKey: false
});

module.exports = model('Medicine', medicineSchema);