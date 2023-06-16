const { medicineResolversQuerys, medicineResolversMutations } = require("./types/medicine");
const { patientResolversQuerys, patientResolversMutations } = require("./types/patient");
const { prescriptionResolversQuerys, prescriptionResolversMutations } = require("./types/prescription");
const { userResolversQuerys, userResolversMutations } = require("./types/user");

const resolvers = {
    Query: {
        ...userResolversQuerys,
        ...patientResolversQuerys,
        ...medicineResolversQuerys,
        ...prescriptionResolversQuerys
    },

    Mutation: {
        ...userResolversMutations,
        ...patientResolversMutations,
        ...medicineResolversMutations,
        ...prescriptionResolversMutations
    }
};

module.exports = {
    resolvers: resolvers
}