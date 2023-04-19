const express = require('express')
const userRouter = require('./routes/user.route')
const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use('/api', userRouter)

app.get('/api', (req, res) => {
  res.json({
    message: 'Connection success'
  })
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))