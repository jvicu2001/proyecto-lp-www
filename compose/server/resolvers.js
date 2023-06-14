const { userResolversQuerys, userResolversMutations } = require("./types/user");

const resolvers = {
    Query: {
        ...userResolversQuerys
    },

    Mutation: {
        ...userResolversMutations
    }
};

module.exports = {
    resolvers: resolvers
}