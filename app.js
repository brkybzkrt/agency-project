const express = require('express');
const loaders=require('./loaders');
const {PagesRoute}=require('./routes/index')


//mongoDB connection
loaders()

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));



//routers
app.use('/',PagesRoute);


const port =  process.env.PORT || 3000

app.listen(port, () => {
    console.log(port,"dinleniyor")
})




