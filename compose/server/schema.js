const { makeExecutableSchema } = require("graphql-tools");

const { resolvers } = require("./resolvers");
const { userQuerys, userMutations } = require("./types/user");

const querys = `

    type Query {
        ${userQuerys}

        getPatient(_id: ID): User
        getPatients: [User]

        getStore(_id: ID): User
        getStores: [Store]

        getPrescription(_id: ID): Prescription
        getPrescriptions: [Prescription]

        getMedicinePrescription(_id: ID): MedicinePrescription
        getMedicinePrescriptions: [MedicinePrescription]

        getMedicine(_id: ID): Medicine
        getMedicines: [Medicine]
    }

`

const models = `

    type User {
        _id: ID
        name: String
        rut: Int
        codeId: Int
        password: String
        role: String
        speciality: String
    }

    type Patient {
        _id: ID
        name: String
        rut: Int
        phone: Int
    }

    type Store {
        _id: ID
        medicineId: ID
        units: Int
    }

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

        createPatient(input: PatientCreateInput): Patient
        updatePatient(_id: ID, input: PatientUpdateInput): Patient
        deletePatient(_id: ID): Patient

        createStore(input: StoreCreateInput): Store
        updateStore(_id: ID, input: StoreUpdateInput): Store
        deleteStore(_id: ID): Store

        createPrescription(input: PrescriptionCreateInput): Prescription
        updatePrescription(_id: ID, input: PrescriptionUpdateInput): Prescription
        deletePrescription(_id: ID): Prescription

        createMedicine(input: MedicineCreateInput): Medicine
        updateMedicine(_id: ID, input: MedicineUpdateInput): Medicine
        deleteMedicine(_id: ID): Medicine
    }

`

const inputs = `

    input UserCreateInput {
        name: String!
        rut: Int!
        codeId: Int!
        password: String!
        role: String!
        speciality: String!
    }

    input UserUpdateInput {
        name: String
        rut: Int
        codeId: Int
        password: String
        role: String
        speciality: String
    }

    input PatientCreateInput {
        name: String!
        rut: Int!
        phone: Int!
    }

    input PatientUpdateInput {
        name: String
        rut: Int
        phone: Int
    }

    input StoreCreateInput {
        medicineId: ID!
        units: Int!
    }

    input StoreUpdateInput {
        medicineId: ID
        units: Int
    }

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