import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true
    },
    productPrice: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ['Available', 'Out of Stock', 'Discontinued'],
      default: 'Available'
    },
    description: {
      type: String,
      trim: true
    },
    productType: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
)

const Product = mongoose.model('Product', productSchema)

export { Product }
