const express = require("express");

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

const connect = require("./database");

const app = express();
connect();

app.get('/', (req, res) => {
    res.send("Hola mundo!");
})

app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(4000, () => console.log("Running a GraphQL API server at http://localhost:4000/graphql"));