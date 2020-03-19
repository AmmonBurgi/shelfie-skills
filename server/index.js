require('dotenv').config()
const massive = require('massive')
const express = require('express')
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('DB connected')
})

app.get('/api/inventory', ctrl.getAll)
app.post('/api/inventory', ctrl.createPro)
app.put('/api/inventory/:id', ctrl.editPro)
app.delete('/api/inventory/:id', ctrl.deletePro)
app.get('/api/inventory/:id', ctrl.getOne)

const port = SERVER_PORT
app.listen(port, () => console.log(`Listening on port ${port}`))