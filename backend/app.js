const express = require('express');
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
let port = process.env.PORT || 8000;

const schema=require('./src/graphql/schema');
const cors=require('cors');

const app = express();
app.use(cors());
app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(port);
console.log('GraphQL API Server up and running at localhost:' + port);
