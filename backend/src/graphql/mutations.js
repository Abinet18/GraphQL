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

const Mutations= new GraphQLObjectType({
  description:"Mutations for our app",
  name:"Mutations",
  fields: {
    addUser: {
      type:UserType,
      args: {
        user:{type:CreateUserType}
      },
      resolve: (parent,args)=>{
        return UserModel.createUser(args.user);
      }
    },
    loginUser: {
      type:UserType,
      args: {
        username:{type:GraphQLString},
        password: {type:GraphQLString}
      },
      resolve: (parent,args)=>{
        return UserModel.loginUser(args.username,args.password);
      }

    },
    addAuthor : {
      type:AuthorType,
      args: {
        author:{type:CreateAuthorType}
      },
      resolve: (_,args)=>{
        return AuthorModel.createAuthor(args.author);
      }
    },
    addBook : {
      type:BookType,
      args: {
        book:{type:CreateBookType}
      },
      resolve: (_,args)=>{
        return BookModel.createBook(args.book);
      }
    },
    addComment: {
      type:BookType,
      args: {
        comment: {type:CreateCommentType}
      },
      resolve: (_,args)=> {
        return BookModel.addComment(args.comment.bookid,{userid:args.comment.userid,comment:args.comment.comment});
      }
    }
  }
});

module.exports=Mutations;
