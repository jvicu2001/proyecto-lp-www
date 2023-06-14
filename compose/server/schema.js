const { makeExecutableSchema } = require("graphql-tools");

const { resolvers } = require("./resolvers");
const { userQuerys, userMutations, userQueryTypes, userMutationTypes } = require("./types/user");
const { patientQuerys, patientMutations, patientMutationTypes, patientQueryTypes } = require("./types/patient");
const { storeQuerys, storeQueryTypes, storeMutations, storeMutationTypes } = require("./types/store");

const querys = `

    type Query {
        ${userQuerys}

        ${patientQuerys}

        ${storeQuerys}

        getPrescription(_id: ID): Prescription
        getPrescriptions: [Prescription]

        getMedicinePrescription(_id: ID): MedicinePrescription
        getMedicinePrescriptions: [MedicinePrescription]

        getMedicine(_id: ID): Medicine
        getMedicines: [Medicine]
    }

`

const models = `

    ${userQueryTypes}

    ${patientQueryTypes}

    ${storeQueryTypes}

    type Prescription {
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
    }

    type Medicine {
        _id: ID
        name: String
        dose: Int
        units: Int
    }

`
const mutation = `

    type Mutation {
        ${userMutations}

        ${patientMutations}

        ${storeMutations}

        createPrescription(input: PrescriptionCreateInput): Prescription
        updatePrescription(_id: ID, input: PrescriptionUpdateInput): Prescription
        deletePrescription(_id: ID): Prescription

        createMedicine(input: MedicineCreateInput): Medicine
        updateMedicine(_id: ID, input: MedicineUpdateInput): Medicine
        deleteMedicine(_id: ID): Medicine
    }

`

const inputs = `

    ${userMutationTypes}

    ${patientMutationTypes}

    ${storeMutationTypes}

    input PrescriptionCreateInput {
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
    }

    input MedicineCreateInput {
        name: String!
        dose: Int!
        units: Int!
    }

    input MedicineUpdateInput {
        name: String
        dose: Int
        units: Int
    }

`


const typeDefs = ` ${querys} ${models} ${mutation} ${inputs}`;


module.exports = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});