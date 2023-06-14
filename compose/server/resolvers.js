const { patientResolversQuerys, patientResolversMutations } = require("./types/patient");
const { storeResolversQuerys, storeResolversMutations } = require("./types/store");
const { userResolversQuerys, userResolversMutations } = require("./types/user");

const resolvers = {
    Query: {
        ...userResolversQuerys,
        ...patientResolversQuerys,
        ...storeResolversQuerys
    },

    Mutation: {
        ...userResolversMutations,
        ...patientResolversMutations,
        ...storeResolversMutations
    }
};

module.exports = {
    resolvers: resolvers
}