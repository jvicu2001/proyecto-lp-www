const resolvers = {
    Query: {
        hello: () => "Hola Mundo!",

        greet: (root, { name }) => `Hola ${name}!`
    }
};

module.exports = {
    resolvers: resolvers
}