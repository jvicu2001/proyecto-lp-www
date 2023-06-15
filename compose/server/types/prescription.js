const Prescription = require("../models/Prescription");


const prescriptionQuerys = `getPrescription(_id: ID): Prescription
    getPrescriptions: [Prescription]
`;

const prescriptionQueryTypes = `type Prescription {
    _id: ID
    patientId: ID
    userId: ID
    medicines: [MedicinePrescription]
}

type MedicinePrescription {
    _id: ID
    medicineId: ID
    dose: Int
    frequency: Int
    consumption_period: Int
}`;

const prescriptionMutations = `createPrescription(input: PrescriptionCreateInput): Prescription
    updatePrescription(_id: ID, input: PrescriptionUpdateInput): Prescription
    deletePrescription(_id: ID): Prescription
`;

const prescriptionMutationTypes = `input PrescriptionCreateInput {
    patientId: ID!
    userId: ID!
    medicines: [MedicinePrescriptionCreateInput]
}

input PrescriptionUpdateInput {
    patientId: ID
    userId: ID
    medicines: [MedicinePrescriptionUpdateInput]
}

input MedicinePrescriptionCreateInput {
    medicineId: ID!
    dose: Int!
    frequency: Int!
    consumption_period: Int!
}

input MedicinePrescriptionUpdateInput {
    medicineId: ID
    dose: Int
    frequency: Int
    consumption_period: Int
}`;


const prescriptionResolversQuerys = {
    async getPrescription(_, { _id }) {
        const prescription = await Prescription.findById(_id);

        return prescription;
    },
    async getPrescriptions() {
        const prescriptions = await Prescription.find();

        return prescriptions;
    }
}

const prescriptionResolversMutations = {
    async createPrescription(_, { input }) {
        const newPrescription = new Prescription(input);
        const savedPrescription = await newPrescription.save();

        return savedPrescription;
    },

    async updatePrescription(_, { _id, input }) {
        const updatedPrescription = await Prescription.findOneAndUpdate(
            { _id: _id },
            { $set: input },
            { useFindAndModify: false, returnOriginal: false }
        );

        return updatedPrescription;
    },

    async deletePrescription(_, { _id }) {
        const deletedPrescription = await Prescription.findOneAndDelete(_id);

        return deletedPrescription;
    }
}


module.exports = {
    prescriptionQuerys,
    prescriptionQueryTypes,
    prescriptionMutations,
    prescriptionMutationTypes,
    prescriptionResolversQuerys,
    prescriptionResolversMutations
}