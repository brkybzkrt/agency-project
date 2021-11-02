const express = require('express');
const methodOverride = require('method-override');

const loaders=require('./loaders');
const {PagesRoute,PortfolioRoute}=require('./routes/index')



//mongoDB connection
loaders()

const app = express();

app.use(express.urlencoded({extended:true})); 
app.use(express.json());

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(methodOverride('_method',{methods:["POST","GET"]}));


//routers
app.use('/',PagesRoute);
app.use('/portfolio',PortfolioRoute);


const port =  process.env.PORT || 3000

app.listen(port, () => {
    console.log(port,"dinleniyor")
})




