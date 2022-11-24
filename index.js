import express from 'express';
import exphbs from 'express-handlebars';
import dotenv from 'dotenv/config';


const app = express();
const hbs = exphbs.create({
    partialsDir: ['./views/partials'],
});


app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('./public'));



app.get('/', (req, res) => {
    res.render('home', {msg: 'Hello World'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
