import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'

const app = express()

const { PORT, DB_CONNECTION } = process.env

const start = async () => {
  try {
    await mongoose.connect(DB_CONNECTION as string)

    app.listen(PORT, () => {
      console.log(`Server is started in http://localhost:${PORT} port`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
