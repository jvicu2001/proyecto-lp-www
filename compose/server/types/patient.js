const Patient = require("../models/Patient");

const patientQuerys = `getPatient(_id: ID): Patient
    getPatients: [Patient]
`;

const patientQueryTypes = `type Patient {
    _id: ID
    name: String
    rut: Int
    phone: Int
}`;

const patientMutations = `createPatient(input: PatientCreateInput): Patient
    updatePatient(_id: ID, input: PatientUpdateInput): Patient
    deletePatient(_id: ID): Patient
`;

const patientMutationTypes = `input PatientCreateInput {
    name: String!
    rut: Int!
    phone: Int!
}

input PatientUpdateInput {
    name: String
    rut: Int
    phone: Int
}`;


const patientResolversQuerys = {
    async getPatient(_, { _id }) {
        const patient = await Patient.findById(_id);

        return patient;
    },
    async getPatients() {
        const patients = await Patient.find();

        return patients;
    }
}

const patientResolversMutations = {
    async createPatient(_, { input }) {
        const newPatient = new Patient(input);
        const savedPatient = await newPatient.save();

        return savedPatient;
    },

    async updatePatient(_, { _id, input }) {
        const updatedPatient = await Patient.findOneAndUpdate(
            { _id: _id },
            { $set: input },
            { useFindAndModify: false, returnOriginal: false }
        );

        return updatedPatient;
    },

    async deletePatient(_, { _id }) {
        const deletedPatient = await Patient.findOneAndDelete(_id);

        return deletedPatient;
    }
}


module.exports = {
    patientQuerys,
    patientQueryTypes,
    patientMutations,
    patientMutationTypes,
    patientResolversQuerys,
    patientResolversMutations
}