const Portfolio=require('../models/Portfolio');

exports.createPortfolio=async(req, res) => {
    const {title,sub_title}=req.body;

await Portfolio.create({title,sub_title}).then(()=>{
    res.status(201).redirect('/portfolio');
}).catch(err => {
    res.status(400).send(err);
})
    
}

exports.editPortfolio=async(req, res) => {


    
}