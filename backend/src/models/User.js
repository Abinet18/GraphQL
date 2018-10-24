const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://bloguser:blogpass1@ds033187.mlab.com:33187/mblog');

const Schema = mongoose.Schema;
const userSchema=new Schema({
  username:{type:String,unique:true,required:true},
  password:{type:String,required:true},
  email: { type:String,required:true},
  fullname:{type:String,required:true}

})

const userModel = mongoose.model("User",userSchema);

module.exports = {
  getUsers: ()=> {
    return userModel.find();
  },
  getUser: id=>{
    return userModel.findById(id);
  },
  createUser : user=> {
    return userModel(user).save();
  },
  loginUser : (username,password)=>{
    return userModel.findOne({username:username,password:password});
  }
};
