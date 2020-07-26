const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
    res.sendStatus(404)
})

const setupServer = () => {
    return app
}
const server = setupServer()
const PORT = process.env.PORT || 4010
server.listen(PORT, () => {
    console.log('Server listening on Port', PORT)
})