const mongoose=require('mongoose');

const PortfolioModel=mongoose.Schema({
    title:{type:"string",required:true},
    sub_title:{type:"string",required:true},

},{version:false,timestamps:true})



module.exports=mongoose.model("Portfolio",PortfolioModel);