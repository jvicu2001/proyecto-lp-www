const { makeExecutableSchema } = require("graphql-tools");

const { resolvers } = require("./resolvers");
const { userQuerys, userMutations, userQueryTypes, userMutationTypes } = require("./types/user");
const { patientQuerys, patientMutations, patientMutationTypes, patientQueryTypes } = require("./types/patient");
const { storeQuerys, storeQueryTypes, storeMutations, storeMutationTypes } = require("./types/store");
const { prescriptionQuerys, prescriptionQueryTypes, prescriptionMutations, prescriptionMutationTypes } = require("./types/prescription");
const { medicineQuerys, medicineQueryTypes, medicineMutations, medicineMutationTypes } = require("./types/medicine");

const querys = `

    type Query {
        ${userQuerys}

        ${patientQuerys}

        ${storeQuerys}

        ${medicineQuerys}
        
        ${prescriptionQuerys}        
    }

`

const models = `

    ${userQueryTypes}

    ${patientQueryTypes}

    ${storeQueryTypes}

    ${medicineQueryTypes}

    ${prescriptionQueryTypes}

`
const mutation = `

    type Mutation {
        ${userMutations}

        ${patientMutations}

        ${storeMutations}

        ${medicineMutations}

        ${prescriptionMutations}
    }

`

const inputs = `

    ${userMutationTypes}

    ${patientMutationTypes}

    ${storeMutationTypes}

    ${medicineMutationTypes}

    ${prescriptionMutationTypes}

`


const typeDefs = ` ${querys} ${models} ${mutation} ${inputs}`;


module.exports = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});