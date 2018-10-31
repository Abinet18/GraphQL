const {GraphQLInterfaceType,GraphQLNonNull,GraphQLID} = require("graphql");
const { nodeDefinitions,fromGlobalId } = require("graphql-relay");

const AuthorModel = require('../models/Author');
const BookModel = require('../models/Book');
const UserModel = require('../models/User');

const {nodeInterface,nodeField}= nodeDefinitions(
  globalId=> {
    const {type,id}=fromGlobalId(globalId);
    if(type=="AuthorType")
    {
      return AuthorModel.getAuthor(id);
    }
    else if(type=="BookType")
    {
      return BookModel.getBook(id);
    }
    else if(type=="UserType")
    {
      return UserModel.getUser(id);
    }
    return nulll;
  },
  object => {
    const {AuthorType,UserType,BookType}=require('../graphql/types');
    if(object.title) { return BookType }
    else if(object.name) { return AuthorType }
    else if(object.username) { return UserType }
    return null;
  }
);

module.exports = {nodeInterface,nodeField};
