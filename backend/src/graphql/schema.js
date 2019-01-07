const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInt
} = require("graphql");

const Query=require("./queries");
const Mutation=require("./mutations");
const {Subscriptions}=require("./Subscriptions");
const schema=new GraphQLSchema({
  query: Query,
  mutation:Mutation,
  subscription:Subscriptions
})

module.exports = schema;
