const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLInt
} = require("graphql");
const {globalIdField,connectionDefinitions}=require("graphql-relay");
const { fromGlobalId,toGlobalId } = require("graphql-relay");
const {mutationWithClientMutationId} = require("graphql-relay");
const AuthorModel=require('../models/Author');
const UserModel = require('../models/User');
const BookModel=require('../models/Book');
const {UserType,CreateUserType,CommentType,CreateCommentType,AuthorType,CreateAuthorType,BookType,CreateBookType,UpdateBookType} = require('./types.js');

const AddUserMutation = mutationWithClientMutationId({
  name:"AddUser",
  inputFields: {user:{type:CreateUserType}},
  outputFields:{user:{type:UserType}},
  mutateAndGetPayload: args=> {
    return new Promise((resolve,reject)=>{
      UserModel.createUser(args.user).then(user=>resolve({user})).catch(reject);
    });
  }
})

const LoginUserMutation = mutationWithClientMutationId({
  name:"LoginUser",
  inputFields: {
          username:{type:GraphQLString},
          password: {type:GraphQLString}
        },
  outputFields:{
    token: {type:GraphQLString}
  },
  mutateAndGetPayload: args=> {
    return new Promise((resolve,reject)=>{
      UserModel.loginUser(args.username,args.password).then(token=>resolve({token:token})).catch(reject);
    });
  }
})

const AddAuthorMutation = mutationWithClientMutationId({
  name:"AddAuthor",
  inputFields: {author:{type:CreateAuthorType}},
  outputFields:{
    author: {type:AuthorType}
  },
  mutateAndGetPayload: (args,context)=> {
    //if(context.user==null) return null;
    return new Promise((resolve,reject)=>{
      AuthorModel.createAuthor(args.author).then(author=>resolve({author})).catch(reject);
    });
  }
})

const AddBookMutation = mutationWithClientMutationId({
  name:"AddBook",
  inputFields:{book:{type:CreateBookType}},
  outputFields:{
    book: {type:BookType}
  },
  mutateAndGetPayload: args=> {
    return new Promise((resolve,reject)=>{
      const book=args.book;
      const {id} = fromGlobalId(book.authorid);
      book.authorid=id;
      BookModel.createBook(book).then(book=>resolve({book})).catch(reject);
    });
  }
})
const DeleteBookMutation = mutationWithClientMutationId({
  name:"DeleteBook",
  inputFields:{id:{type:GraphQLID}},
  outputFields:{
    id: {type:GraphQLID}
  },
  mutateAndGetPayload: args=> {
    return new Promise((resolve,reject)=>{
      const bookid=args.id;
      const {id} = fromGlobalId(bookid);
      BookModel.deleteBook(id).then((id)=>resolve({id:bookid})).catch(reject);
    });
  }
})

const UpdateBookMutation = mutationWithClientMutationId({
  name:"UpdateBook",
  inputFields:{book:{type:UpdateBookType}},
  outputFields:{
    book: {type:BookType}
  },
  mutateAndGetPayload: args=> {
    return new Promise((resolve,reject)=>{
      const book=args.book;
      const {id} = fromGlobalId(book.id);
      book.id=id;
      if(book.authorid)
      {
        book.authorid=fromGlobalId(book.authorid).id;
      }
      BookModel.updateBook(book).then((book)=>resolve({book})).catch(reject);
    });
  }
})

const DeleteAuthorMutation = mutationWithClientMutationId({
  name:"DeleteAuthor",
  inputFields:{id:{type:GraphQLID}},
  outputFields:{
    id: {type:GraphQLID}
  },
  mutateAndGetPayload: args=> {
    return new Promise((resolve,reject)=>{
      const authorid=args.id;
      const {id} = fromGlobalId(authorid);
      AuthorModel.deleteAuthor(id).then((id)=>resolve({id:authorid})).catch(reject);
    });
  }
})

const AddCommentMutation = mutationWithClientMutationId({
  name:"AddComment",
  inputFields: {comment:{type:CreateCommentType}},
  outputFields:{
    book: {type:BookType}
  },
  mutateAndGetPayload: (args,context)=> {
    return new Promise((resolve,reject)=>{
      const bookid=fromGlobalId(args.comment.bookid).id;
       const userid=context.user.id;
      BookModel.addComment(bookid,{userid:userid,comment:args.comment.comment}).then(book=>resolve({book})).catch(reject);
    });
  }
})

const Mutations= new GraphQLObjectType({
  description:"Mutations for our app",
  name:"Mutations",
  fields: {
    addUser: AddUserMutation,
    loginUser: LoginUserMutation,
    addAuthor : AddAuthorMutation,
    addBook : AddBookMutation,
    addComment: AddCommentMutation,
    deleteBook:DeleteBookMutation,
    deleteAuthor: DeleteAuthorMutation,
    updateBook: UpdateBookMutation
    }
  }
);

module.exports=Mutations;


// const Mutations= new GraphQLObjectType({
//   description:"Mutations for our app",
//   name:"Mutations",
//   fields: {
//     addUser: {
//       type:UserType,
//       args: {
//         user:{type:CreateUserType}
//       },
//       resolve: (parent,args)=>{
//         return UserModel.createUser(args.user);
//       }
//     },
//     loginUser: {
//       type:UserType,
//       args: {
//         username:{type:GraphQLString},
//         password: {type:GraphQLString}
//       },
//       resolve: (parent,args)=>{
//         return UserModel.loginUser(args.username,args.password);
//       }
//
//     },
//     addAuthor : {
//       type:AuthorType,
//       args: {
//         author:{type:CreateAuthorType}
//       },
//       resolve: (_,args)=>{
//         return AuthorModel.createAuthor(args.author);
//       }
//     },
//     addBook : {
//       type:BookType,
//       args: {
//         book:{type:CreateBookType}
//       },
//       resolve: (_,args)=>{
//         return BookModel.createBook(args.book);
//       }
//     },
//     addComment: {
//       type:BookType,
//       args: {
//         comment: {type:CreateCommentType}
//       },
//       resolve: (_,args)=> {
//         return BookModel.addComment(args.comment.bookid,{userid:args.comment.userid,comment:args.comment.comment});
//       }
//     }
//   }
// });
