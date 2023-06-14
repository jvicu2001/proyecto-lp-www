const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rut: {
        type: Number,
        required: true,
        unique: true
    },
    codeId: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    }
},{
	timestamps: true,
	versionKey: false
});

module.exports = model('User', userSchema);