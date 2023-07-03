const { ApolloError } = require("apollo-server-errors");

const isAuthenticated = async (resolve, parent, args, context, info) => {
    console.log(context)
    throw new ApolloError("Not Authenticated");
    // if (!context.session.userId) {
    //     throw new ApolloError("Not Authenticated");
    // }

    return resolve(parent, args, context, info);
}


const middleware = {
    Mutation: {
        deleteUser: isAuthenticated
    }
}

module.exports = {
    middleware: middleware
};