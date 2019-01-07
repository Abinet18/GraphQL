const express = require('express');
const jwt=require('jsonwebtoken');
const { execute,subscribe } = require('graphql');
const { createServer } = require('http');
const bodyParser = require('body-parser');
//const graphqlHTTP = require('express-graphql');
const { graphqlExpress,graphiqlExpress } = require("apollo-server-express");
let port = 8000;
const SECRET="secret1987654";
const schema=require('./src/graphql/schema');
const cors=require('cors');

const { SubscriptionServer }  = require('subscriptions-transport-ws');
const subscriptionsEndpoint = `ws://localhost:${port}/subscriptions`;

//const { PubSub } = require('graphql-subscriptions');

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
app.use('/graphql', bodyParser.json(),graphqlExpress(req=>({
     schema: schema,
     context: {user:req.user,SECRET:SECRET},
     // rootValue:root,
     // pretty: true,
     // graphiql: true,
     // subscriptionsEndpoint:subscriptionsEndpoint

   })));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: subscriptionsEndpoint
}));

const server=createServer(app);
//const pubsub=new PubSub();
server.listen(port,()=>{
  console.log('GraphQL API Server up and running at localhost:' + port);

  new SubscriptionServer({
    execute,
    subscribe,
    schema},{
      server:server,
      path:'/subscriptions'
  })
});
