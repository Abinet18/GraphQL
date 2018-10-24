const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require("graphql");

const AuthorModel=require('../models/Author');
const UserModel = require('../models/User');
const BookModel=require('../models/Book');

const {UserType,CreateUserType,CommentType,CreateCommentType,AuthorType,CreateAuthorType,BookType,CreateBookType} = require('./types.js');
const Query = new GraphQLObjectType({
  name:"Query",
  description:"Query interface for our app",
  fields:{
    user: {
      type:UserType,
      description:"Query single user",
      args: {
        id: {type: GraphQLString}
      },
      resolve : args=>{return UserModel.getUser(args.id);}
    },
    users: {
      type:GraphQLList(UserType),
      args: {},
      resolve: args=> { return UserModel.getUsers();}
    },
    author: {
      type:AuthorType,
      args : {
        id:{type:GraphQLString}
      },
      resolve : args=> {
        return AuthorModel.getAuthor(args.id);
      }
    },
    authors: {
      type:GraphQLList(AuthorType),
      args: {},
      resolve: args=> {
        return AuthorModel.getAuthors();
      }
    },
    book: {
      type:BookType,
      args: {
        id: {
          type:GraphQLString
        }
      },
      resolve: args=>{
        return BookModel.getBook(args.id);
      }
    },
    books: {
      type:GraphQLList(BookType),
      args:{},
      resolve: args=> {
        return BookModel.getBooks();
      }
    }
  }
})

module.exports=Query;
