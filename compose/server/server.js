const { ApolloServer } = require("apollo-server");
const schema = require("./schema");

const connect = require("./database");

connect();

const server = new ApolloServer(schema);

server.listen().then(({url}) => {
    console.log(`Server running at ${url}`);
})