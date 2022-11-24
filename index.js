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

});



app.listen(3000, () => {
    console.log(`Server listening on port ${PORT}`);
});
