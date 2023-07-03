const { makeExecutableSchema } = require("graphql-tools");
const { gql } = require("apollo-server");

const { resolvers } = require("./resolvers");
const { userQuerys, userMutations, userQueryTypes, userMutationTypes } = require("./graphql/user");
const { patientQuerys, patientMutations, patientMutationTypes, patientQueryTypes } = require("./graphql/patient");
const { prescriptionQuerys, prescriptionQueryTypes, prescriptionMutations, prescriptionMutationTypes } = require("./graphql/prescription");
const { medicineQuerys, medicineQueryTypes, medicineMutations, medicineMutationTypes } = require("./graphql/medicine");

// const { buildSchema } = require("graphql");

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


module.exports = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});