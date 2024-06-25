import mongoose from 'mongoose'

const customerSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)
        },
        message: props => `${props.value} is not a valid email address!`
      }
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /\d{10}/.test(v)
        },
        message: props => `${props.value} is not a valid phone number!`
      }
    },
    whatsappNumber: {
      type: String,
      validate: {
        validator: function (v) {
          return /\d{10}/.test(v)
        },
        message: props => `${props.value} is not a valid WhatsApp number!`
      }
    },
    address: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
)

const Customer = mongoose.model('Customer', customerSchema)

export { Customer }
