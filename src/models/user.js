const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    maxlength: 512,
  },
  role: {
    type: schema.Types.ObjectId,
    ref: "Role",
  },
  status: {
    type: false,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports=mongoose.model('User',userSchema)