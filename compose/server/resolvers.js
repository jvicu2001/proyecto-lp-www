const { medicineResolversQuerys, medicineResolversMutations } = require("./types/medicine");
const { patientResolversQuerys, patientResolversMutations } = require("./types/patient");
const { prescriptionResolversQuerys, prescriptionResolversMutations } = require("./types/prescription");
const { storeResolversQuerys, storeResolversMutations } = require("./types/store");
const { userResolversQuerys, userResolversMutations } = require("./types/user");

const resolvers = {
    Query: {
        ...userResolversQuerys,
        ...patientResolversQuerys,
        ...storeResolversQuerys,
        ...medicineResolversQuerys,
        ...prescriptionResolversQuerys
    },

    Mutation: {
        ...userResolversMutations,
        ...patientResolversMutations,
        ...storeResolversMutations,
        ...medicineResolversMutations,
        ...prescriptionResolversMutations
    }
};

module.exports = {
    resolvers: resolvers
}