const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require("graphql");

const AuthorModel=require('../models/Author');
const UserModel = require('../models/User');
const BookModel=require('../models/Book');

const UserType = new GraphQLObjectType({
  name:'UserType',
  description:"return User Type",
  fields:()=>({
    id:{
      type:new GraphQLNonNull(GraphQLString),
      description:"ID of user",
      resolve: user=>user.id
    },
    username:{
      type:new GraphQLNonNull(GraphQLString),
      description:"username of user",
      resolve: user=>user.username
    },
    email:{
      type:new GraphQLNonNull(GraphQLString),
      description:"email of user",
      resolve: user=>user.email
    },
    fullname:{
      type:new GraphQLNonNull(GraphQLString),
      description:"full name of user",
      resolve: user=>user.fullname
    }
  })

});

const CreateUserType = new GraphQLInputObjectType({
  name:'CreateUserType',
  description:"return User Create Type",
  fields:{
    username:{
      type:new GraphQLNonNull(GraphQLString),
        },
    email:{
      type:new GraphQLNonNull(GraphQLString),
        },
    password:{type:new GraphQLNonNull(GraphQLString)},
    fullname:{
      type:new GraphQLNonNull(GraphQLString),
        }
  }

});

const AuthorType = new GraphQLObjectType({
  name:'AuthorType',
  description:"return Author Type",
  fields:()=>(  {
      id:{
        type:new GraphQLNonNull(GraphQLString),
        description:"ID of Author",
        resolve: author=>author.id
      },
      name:{
        type:new GraphQLNonNull(GraphQLString),
        description:"name of author",
        resolve: author=>author.name
      },
      age:{
        type:new GraphQLNonNull(GraphQLInt),
        description:"age of author",
        resolve: author=>author.age
      },
      birthPlace:{
        type:new GraphQLNonNull(GraphQLString),
        description:"birth place of author",
        resolve: author=>author.birthPlace
      },
      books: {
        type:new GraphQLList(BookType),
        description:"books written by author",
        resolve: author=>BookModel.getAuthorBooks(author.id)
      }
    })

});

const CreateAuthorType = new GraphQLInputObjectType({
  name:'CreateAuthorType',
  description:"return Author Create Type",
  fields:  {
      name:{
        type:new GraphQLNonNull(GraphQLString),
          },
      age:{
        type:new GraphQLNonNull(GraphQLInt),
          },
      birthPlace:{type:new GraphQLNonNull(GraphQLString)}
    }

});

const BookType = new GraphQLObjectType({
  name:'BookType',
  description:"return book Type",
  fields:()=>({
    id:{
      type:new GraphQLNonNull(GraphQLString),
      description:"ID of book",
      resolve: book=>book.id
    },
    title:{
      type:new GraphQLNonNull(GraphQLString),
      description:"title of book",
      resolve: book=>book.title
    },
    description:{
      type:new GraphQLNonNull(GraphQLString),
      description:"description of book",
      resolve: book=>book.description
    },
    author:{
      type:AuthorType,
      description:"author of book",
      resolve: (parent,args)=>AuthorModel.getAuthor(parent.authorid)
    },
    comments: {
      type:GraphQLList(CommentType),
      description:"comments on book",
    }
  })
});

const CreateBookType = new GraphQLInputObjectType({
  name:'CreateBookType',
  description:"return Create Book Type",
  fields:{
      title:{
        type:new GraphQLNonNull(GraphQLString),
          },
      description:{
        type:new GraphQLNonNull(GraphQLString),
          },
      authorid:{type:new GraphQLNonNull(GraphQLString)}
    }

});

const CommentType = new GraphQLObjectType({
  name:'CommentType',
  description:"return Comment Type",
  fields:()=>(  {
      user:{
        type:UserType,
        description:"Commenter user",
        resolve: (parent,args)=>{
          return UserModel.getUser(parent.userid);
        }
      },
      comment:{
        type:new GraphQLNonNull(GraphQLString),
        description:"title of book",
        resolve: comment=>comment.comment
      },
      commentdate:{
        type:new GraphQLNonNull(GraphQLString),
        description:"date time of comment",
        resolve: comment=>comment.commentdate.toString()
      },

    })

});

const CreateCommentType = new GraphQLInputObjectType({
  name:'CreateCommentType',
  description:"return Create Comment Type",
  fields:{
      bookid:{type:new GraphQLNonNull(GraphQLString)},
      userid:{
        type:new GraphQLNonNull(GraphQLString),
          },
      comment:{
        type:new GraphQLNonNull(GraphQLString),
          },
        }

});

module.exports={
  BookType,CreateBookType,
  UserType,CreateUserType,
  AuthorType,CreateAuthorType,CreateCommentType,CommentType
};
