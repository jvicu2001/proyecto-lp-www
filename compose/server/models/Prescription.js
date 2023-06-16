const { Schema, model } = require("mongoose");

const prescriptionSchema = new Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    medicines: [{
        medicineId: {
            type: Number,
            ref: "Medicine",
            required: true
        },
        dose: Number,
        frequency: Number,
        consumption_period: Number
    }]
},{
	timestamps: true,
	versionKey: false
});

module.exports = model('Prescription', prescriptionSchema);