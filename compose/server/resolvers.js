const { patientResolversQuerys, patientResolversMutations } = require("./types/patient");
const { prescriptionResolversQuerys, prescriptionResolversMutations } = require("./types/prescription");
const { storeResolversQuerys, storeResolversMutations } = require("./types/store");
const { userResolversQuerys, userResolversMutations } = require("./types/user");

const resolvers = {
    Query: {
        ...userResolversQuerys,
        ...patientResolversQuerys,
        ...storeResolversQuerys,
        ...prescriptionResolversQuerys
    },

    Mutation: {
        ...userResolversMutations,
        ...patientResolversMutations,
        ...storeResolversMutations,
        ...prescriptionResolversMutations
    }
};

module.exports = {
    resolvers: resolvers
}