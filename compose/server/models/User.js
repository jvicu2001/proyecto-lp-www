const bcrypt = require("bcryptjs");

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
        required: true,
        unique: true
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


userSchema.statics.encryptPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);

	return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
	return await bcrypt.compare(password, receivedPassword);
}


module.exports = model('User', userSchema);