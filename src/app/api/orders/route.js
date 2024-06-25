import { NextResponse } from 'next/server'

import { dbConnect } from '@/lib/mongo'
import { Product } from '@/models/products'

export async function GET() {
  return NextResponse.json({
    statusbar: 'success'
  })
}

export async function POST(request) {
  try {
    const data = await request.json()

    await dbConnect()
    const res = await Product.create(data)

    console.log(res)

    return NextResponse.json({
      statusbar: 'success',
      data: res
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        statusbar: 'error',
        message: 'There was an error saving the product'
      },
      { status: 500 }
    )
  }
}
