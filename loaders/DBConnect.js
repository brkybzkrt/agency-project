const mongoose = require('mongoose');

const db=mongoose.connection;


db.once("open",()=>{
    console.log('DB Bağlantısı başarılı')
})

const connectDB= async () =>{
    await mongoose.connect(
    "mongodb://localhost:27017/agency",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    }
)}


module.exports ={connectDB}