const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roles = {
  values: ['ADMIN', 'USER'],
  message: '{VALUE} not is a role.'
}

const UserSchema = new Schema(
  {
    name: String,
    lastName: String,
    userName: {
      type: String,
      index: {
        unique: true
      }
    },
    email: {
      type: String,
      required: [true],
      index: {
        unique: true
      }
    },
    role: {
      type: String,
      default: 'USER',
      required: [true],
      enum: roles
    },
    password: {
      type: String,
      required: [true]
    },
    creationDate: String,
    modificationDate: String
  }
)

const UserModel = mongoose.model('user', UserSchema, 'user')
UserModel.createIndexes()

module.exports = UserModel
