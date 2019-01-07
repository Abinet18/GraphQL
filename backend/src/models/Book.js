const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://bloguser:blogpass1@ds033187.mlab.com:33187/mblog');

const Schema = mongoose.Schema;
const bookSchema=new Schema({
  title:{type:String,unique:true,required:true},
  description:{type:String,required:true},
  authorid: { type:String,ref:"Author",required:true},
  comments:{default:[],type:[{
                      userid:{type:String,ref:'User',required:true},
                      comment: {type:String, required:true},
                      commentdate: {type:Date,required:true,default:new Date()}
                    }
]}
})

const bookModel = mongoose.model("book",bookSchema);
const UserModel=require('./User');
const AuthorModel=require('./Author');

module.exports = {
  getBooks: (order,filter)=> {
    return bookModel.find(filter).sort({_id:order=='DESC'?-1:1});
  },
  getBook: id=>{
      return bookModel.findById(id);
  },
  createBook : async  book=> {
    const author=await AuthorModel.getAuthor(book.authorid);
    if(author==null) return null;
    return bookModel(book).save();
  },
  addComment : async (id,comment)=>
  {
  const book=await bookModel.findById(id);
  if(book==null) {
    console.log("book not found")
    return null;
  }
  const user=await UserModel.getUser(comment.userid);
  {
  if(user==null) {
    console.log("user not found");
    return null;
  }

}
  return bookModel.findByIdAndUpdate(id,{$push:{comments:comment}},{new:true});
 },
  getAuthorBooks: authorid=>{
    return bookModel.find({authorid:authorid});
  },
  deleteBook :  async id => {

    return bookModel.findByIdAndDelete(id);
  },
  updateBook : book => {
    return bookModel.findByIdAndUpdate(book.id,{$set:{...book}},{new:true});
  }

};
