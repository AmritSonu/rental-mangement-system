import mongoose from 'mongoose'

export async function dbConnect() {
  try {
    let conn = await mongoose.connect(String(process.env.MONOGODB_URL))

    return conn
  } catch (e) {
    throw new Error(e)
  }
}
