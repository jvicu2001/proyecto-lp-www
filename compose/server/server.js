const express = require("express");

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema")

const app = express();

app.get('/', (req, res) => {
    res.send("Hola mundo!");
})

app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: schema
    // rootValue: root
}));

app.listen(4000, () => console.log("Running a GraphQL API server at http://localhost:4000/graphql"));