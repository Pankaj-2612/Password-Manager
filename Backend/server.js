const express = require('express')
require('dotenv').config()
const { MongoClient, ObjectId } = require('mongodb')
const cors = require('cors')

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dbName = 'Passop'
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

async function startServer() {
  try {
    await client.connect()
    const db = client.db(dbName)
    const usersCollection = db.collection('Users')
    const passwordsCollection = db.collection('Passwords')

    app.get('/', (req, res) => {
      res.send('Passop API is running')
    })

    app.post('/signup', async (req, res) => {
      const { name, email, password } = req.body
      if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required' })
      }

      const existingUser = await usersCollection.findOne({ email })
      if (existingUser) {
        return res.status(409).json({ error: 'Email already registered' })
      }

      const newUser = { name, email, password }
      const result = await usersCollection.insertOne(newUser)
      const user = { ...newUser, _id: result.insertedId.toString() }
      res.json(user)
    })

    app.post('/login', async (req, res) => {
      const { email, password } = req.body
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' })
      }

      const user = await usersCollection.findOne({ email, password })
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' })
      }

      res.json({ ...user, _id: user._id.toString() })
    })

    app.get('/passwords', async (req, res) => {
      const { userId } = req.query
      if (!userId) {
        return res.status(400).json({ error: 'userId is required' })
      }

      const findResult = await passwordsCollection.find({ userId }).toArray()
      const passwords = findResult.map((password) => ({
        ...password,
        _id: password._id.toString()
      }))
      res.json(passwords)
    })

    app.post('/passwords', async (req, res) => {
      const password = req.body
      if (!password || !password.userId || !password.site || !password.username || !password.password) {
        return res.status(400).json({ error: 'Incomplete password data' })
      }

      const result = await passwordsCollection.insertOne(password)
      res.json({ ...password, _id: result.insertedId.toString() })
    })

    app.delete('/passwords/:id', async (req, res) => {
      const { id } = req.params
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid password id' })
      }

      const result = await passwordsCollection.deleteOne({ _id: new ObjectId(id) })
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Password not found' })
      }

      res.json({ success: true })
    })

    app.listen(port, () => {
      console.log(`Passop backend listening on http://localhost:${port}`)
    })
  } catch (err) {
    console.error('Failed to start server', err)
    process.exit(1)
  }
}

startServer()