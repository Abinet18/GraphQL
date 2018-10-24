const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInt
} = require("graphql");

const Query=require("./queries");
const Mutation=require("./mutations");

const schema=new GraphQLSchema({
  query: Query,
  mutation:Mutation
})

module.exports = schema;
