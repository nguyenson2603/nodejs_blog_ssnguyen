const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./config/db/index');
const app = express();
const port = 3000;

db.connect();
app.use(express.urlencoded());
app.use(express.json());
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
