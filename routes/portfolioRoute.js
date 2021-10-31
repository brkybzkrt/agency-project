const express= require('express');
const { createPortfolio,editPortfolio } = require('../controller/portfolioController');


const router=express.Router();


router.route('/create').post(createPortfolio);

router.route('/edit').put(editPortfolio);


module.exports=router;