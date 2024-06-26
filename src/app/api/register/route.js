import { NextResponse } from 'next/server'

import bcrypt from 'bcryptjs'

import { v4 as uuidv4 } from 'uuid'

import { createUser } from '@/queries/user'

import { dbConnect } from '@/lib/mongo'

export const POST = async request => {
  const { name, email, password } = await request.json()

  console.log(name, email, password)

  // Create a DB Conenction
  await dbConnect()

  // Generate a unique user ID
  const uniqueId = uuidv4()

  // Encrypt the password
  const hashedPassword = await bcrypt.hash(password, 5)

  // Form a DB payload with the unique ID
  const newUser = {
    userId: uniqueId, // Add the unique ID to the payload
    name,
    password: hashedPassword,
    email
  }

  // Update the DB
  try {
    await createUser(newUser)
  } catch (err) {
    return new NextResponse(err.mesage, {
      status: 500
    })
  }

  return new NextResponse('User has been created', {
    status: 201
  })
}
