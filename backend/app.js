const express = require('express');
const jwt=require('jsonwebtoken');
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
let port = process.env.PORT || 8000;
const SECRET="secret1987654";
const schema=require('./src/graphql/schema');
const cors=require('cors');

const app = express();

const addUser = async (req) => {
  const token = req.headers.authorization;
  try {
    console.log(token);
    const { user } = await jwt.verify(token, SECRET);
    console.log(user);
    req.user = user;
  } catch (err) {
    console.log(err);
  }
  req.next();
};

app.use(cors());
app.use(addUser);

// app.use('/', graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true
// }));
app.use('/', graphqlHTTP((req) => ({
     schema: schema,
     context: {user:req.user,SECRET:SECRET},
     rootValue:root,
     pretty: true,
     graphiql: true
   })));
app.listen(port);
console.log('GraphQL API Server up and running at localhost:' + port);
