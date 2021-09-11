const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roles = {
  values: ['ADMIN', 'USER'],
  message: '{VALUE} not is a role.'
}

const UserSchema = Schema(
  {
    name: String,
    lastName: String,
    userName: {
      type: String,
      dropDups: true
    },
    email: {
      type: String,
      required: [true]
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
  },
  {
    toObject: {
      transform: function (doc, ret) {
        delete ret.password
      }
    },
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password
      }
    }
  }
)

module.exports = mongoose.model('user', UserSchema, 'user')
