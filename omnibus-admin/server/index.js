import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import signNew from './routes/signNew.js'
import getAll from './routes/getAll.js'
import deleteOne from './routes/deleteOne.js'
import chgState from './routes/chgState.js'
import chkState from './routes/chkState.js'

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://admin:dbPassword@mycluster.t4ym4.mongodb.net/omnibus-admin', () => {
  console.log('MongoDB active..')
})

app.post('/signnew', signNew)
app.post('/deleteone', deleteOne)
app.post('/chgstate', chgState)
app.post('/chkstate', chkState)

app.get('/getall', getAll)

app.use('/panel', express.static('./public/panel'))

app.listen(5000, () => {
  console.log('Server running..')
})
