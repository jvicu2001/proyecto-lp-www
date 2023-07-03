const { medicineResolversQuerys, medicineResolversMutations } = require("./graphql/medicine");
const { patientResolversQuerys, patientResolversMutations } = require("./graphql/patient");
const { prescriptionResolversQuerys, prescriptionResolversMutations } = require("./graphql/prescription");
const { userResolversQuerys, userResolversMutations } = require("./graphql/user");

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