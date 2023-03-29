const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));
app.use('/css', express.static(path.join(__dirname, '/public/css')));

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})