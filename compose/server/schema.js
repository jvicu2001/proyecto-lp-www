const { gql } = require("apollo-server");

const { resolvers } = require("./resolvers");
const { userQuerys, userMutations, userQueryTypes, userMutationTypes } = require("./types/user");
const { patientQuerys, patientMutations, patientMutationTypes, patientQueryTypes } = require("./types/patient");
const { prescriptionQuerys, prescriptionQueryTypes, prescriptionMutations, prescriptionMutationTypes } = require("./types/prescription");
const { medicineQuerys, medicineQueryTypes, medicineMutations, medicineMutationTypes } = require("./types/medicine");

const querys = `

    type Query {
        ${userQuerys}

        ${patientQuerys}

        ${medicineQuerys}
        
        ${prescriptionQuerys}        
    }

`

const models = `

    ${userQueryTypes}

    ${patientQueryTypes}

    ${medicineQueryTypes}

    ${prescriptionQueryTypes}

`
const mutation = `

    type Mutation {
        ${userMutations}

        ${patientMutations}

        ${medicineMutations}

        ${prescriptionMutations}
    }

`

const inputs = `

    ${userMutationTypes}

    ${patientMutationTypes}

    ${medicineMutationTypes}

    ${prescriptionMutationTypes}

`


const typeDefs = gql` ${querys} ${models} ${mutation} ${inputs}`;


module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
};