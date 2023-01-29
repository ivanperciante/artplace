const express = require('express');
const app = express();
const path = require('path');
const router = require("./routes/main");
const productsRouter = require("./routes/productsRouter");
const apiRouter = require('./routes/apiRouter')
const usersRouter = require("./routes/usersRouter");
const methodOverride = require('method-override');
const session = require("express-session");
const { urlencoded } = require('express');
const cookieParser = require("cookie-parser");
const cookieRecuerdame = require('./middlewares/cookieRecuerdame');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(express.static('./public'));
app.use(methodOverride('_method'));
app.use(session({
    secret: "secreto",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24},


}));
app.use(urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());
app.use(cookieRecuerdame);
app.use(userLoggedMiddleware);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const port=8000
app.listen(port, ()=> {
    console.log('Servidor corriendo en puerto ' + port)
})


app.use("/", router)
app.use("/products", productsRouter)
app.use("/users", usersRouter)
app.use("/api", apiRouter)
