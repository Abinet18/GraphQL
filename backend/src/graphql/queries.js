const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLID
} = require("graphql");

const AuthorModel=require('../models/Author');
const UserModel = require('../models/User');
const BookModel=require('../models/Book');

const { connectionArgs,connectionFromPromisedArray } = require("graphql-relay");
const {nodeField}= require("../interface/Node");



const {UserType,CreateUserType,CommentType,CreateCommentType,
      AuthorType,CreateAuthorType,BookType,CreateBookType
      ,AuthorConnection,BookConnection,UserConnection} = require('./types.js');

const Viewer=new GraphQLObjectType({
  name:"Viewer",
  fields:{
    allBooks: {
      type: new GraphQLNonNull(BookConnection),
      args:{...connectionArgs,order:{type:GraphQLString},filter:{type:GraphQLString}},
      resolve: (_,args) => {
        const titleContainsFilter=args.filter==null || args.filter=="" ? {}:{title:{$regex:new RegExp(".*"+args.filter+".*"),$options:'i'}};
        return connectionFromPromisedArray(BookModel.getBooks(args.order,titleContainsFilter),args)
      }
    },
    id:{
      type:new GraphQLNonNull(GraphQLID),
      args:{},
      resolve: (_,args)=>"viewer-fixed"
    }
  }
});

const AuthorViewer=new GraphQLObjectType({
  name:"AuthorViewer",
  fields:{
    allAuthors: {
      type: new GraphQLNonNull(AuthorConnection),
      args:connectionArgs,
      resolve: (_,args) => connectionFromPromisedArray(AuthorModel.getAuthors(),args)
    },
    id:{
      type:new GraphQLNonNull(GraphQLID),
      args:{},
      resolve: (_,args)=>"author-viewer-fixed"
    }
  }
});

const Query = new GraphQLObjectType({
  name:"Query",
  description:"Query interface for our app",
  fields:{
    node: nodeField,
    user: {
      type:UserType,
      description:"Query single user",
      args: {
        id: {type: GraphQLString}
      },
      resolve : args=>{return UserModel.getUser(args.id);}
    },
    users: {
      type:UserConnection,
      args: connectionArgs,
      resolve: (_,args)=> connectionFromPromisedArray(UserModel.getUsers(),args)
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
      type:AuthorConnection,
      args: connectionArgs,
      resolve: (_,args)=> connectionFromPromisedArray(AuthorModel.getAuthors(),args)
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
      type:BookConnection,
      args: connectionArgs,
      resolve: (_,args)=> connectionFromPromisedArray(BookModel.getBooks(),args)
    },
    viewer: {
      name:"Viewer",
      description:"Viewer pattern implementation",
      type: new GraphQLNonNull(Viewer),
      resolve: (_,args)=>{
        return {}
      }
    },
    authorviewer: {
      name:"AuthorViewer",
      description:"Viewer pattern implementation",
      type: new GraphQLNonNull(AuthorViewer),
      resolve: (_,args)=>{
        return {}
      }
    }
  }
})

module.exports=Query;
