require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./config/db.config')()

const app = express()

app.use(express.json())
// Não esquecer de criar variável de ambiente com o endereço do seu app React (local ou deployado no Netlify)
app.use(cors({ origin: process.env.REACT_APP_URL }))

const userRouter = require('./routes/user.routes')
app.use('/api', userRouter)

const messageRouter = require('./routes/message.routes')
app.use('/api', messageRouter)

const postRouter = require('./routes/post.routes')
app.use('/api', postRouter)

app.listen(Number(process.env.PORT), () =>
  console.log(`Server up and running at port ${process.env.PORT}`),
)
