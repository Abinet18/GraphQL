const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://bloguser:blogpass1@ds033187.mlab.com:33187/mblog');

const Schema = mongoose.Schema;
const authorSchema=new Schema({

  name:{type:String,unique:true,required:true},
  age:{type:Number,required:true},
  birthPlace:{type:String},
})

const AuthorModel = mongoose.model("Author",authorSchema);

module.exports = {
  getAuthors: ()=> {
    return AuthorModel.find();
  },
  getAuthor: id=>{
    return AuthorModel.findById(id);
  },
  createAuthor : author=> {
    return AuthorModel(author).save();
  }
};
