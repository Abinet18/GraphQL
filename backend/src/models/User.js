const bcrypt =require('bcrypt');
const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://bloguser:blogpass1@ds033187.mlab.com:33187/mblog');

const SECRET="secret1987654";
const hashRounds=10;

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
  createUser : async user=> {
    user.password = await bcrypt.hash(user.password,hashRounds);
    return userModel(user).save();
  },
  loginUser : async (username,password)=>{
  //  return userModel.findOne({username:username,password:password});
    const user = await userModel.findOne({ username: username });
      if (!user) {
        throw new Error('Not user with that email');
      }

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error('Incorrect password');
      }

      // token = '12083098123414aslkjdasldf.asdhfaskjdh12982u793.asdlfjlaskdj10283491'
      // verify: needs secret | use me for authentication
      // decode: no secret | use me on the client side
      const token = jwt.sign(
        {
          user: {id:user.id,username:username},
        },
        SECRET,
        {
          expiresIn: '1y',
        },
      );

      return token;
    }
};
