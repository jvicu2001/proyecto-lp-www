const { ApolloServer } = require("apollo-server");
const schema = require("./schema");
const { applyMiddleware } = require("graphql-middleware");

const { middleware } = require("./middleware/middleware");

const connect = require("./database");

connect();


const schemaWithMiddleware = applyMiddleware(schema, middleware);
const server = new ApolloServer({
    schema: schemaWithMiddleware
});

server.listen().then(({url}) => {
    console.log(`Server running at ${url}`);
})