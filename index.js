// imports
const express = require('express');
const departaments = require('./db/departments.json')
const app = express();
const port = 8000

// static files
app.use(express.static('public'))
// set views 

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.setHeader('Hola', 'jfjfjfjfd')
    res.render('index.ejs')
})
app.get('/form', (req, res) => {
    res.render('add.ejs', { departments: departaments })
})
app.get('/description', (req, res)=>{
    res.render('product.ejs')
})
app.get('/cities/:departament', (req, res) => {
    const { departament } = req.params
    const { ciudades } = departaments.find(({ id }) => id == departament) || {}
    res.send(ciudades || [])
})
// Listen on port
app.listen(port, () => {
    console.info(`server in port ${port}`);
})