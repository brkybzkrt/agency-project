const express= require('express');
const { getIndexPage, getAboutPage, getPortfolioPage, getServicePage, getTeamPage} = require('../controller/pageController');


const router = express.Router();


router.route('/').get(getIndexPage)
router.route('/about').get(getAboutPage)
router.route('/portfolio').get(getPortfolioPage)
router.route('/services').get(getServicePage)
router.route('/team').get(getTeamPage)



module.exports= router;