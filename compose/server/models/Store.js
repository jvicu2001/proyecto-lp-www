const { Schema, model } = require("mongoose");

const storeSchema = new Schema({
    medicineId: {
        type: Schema.Types.ObjectId,
        ref: "Medicine",
        required: true
    },
    units: {
        type: Number,
        required: true
    }
},{
	timestamps: true,
	versionKey: false
});

module.exports = model('Store', storeSchema);