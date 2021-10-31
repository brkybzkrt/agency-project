const Portfolio=require('../models/Portfolio');

exports.getIndexPage = (req, res) => {
  res.status(200).render('index', { page_name: 'index' });
};

exports.getPortfolioPage = async (req, res) => {
  const portfolios= await Portfolio.find({}).sort({createdAt:-1})
  res.status(200).render('portfolio', { page_name: 'portfolio',portfolios });
};

exports.getServicePage = (req, res) => {
  res.status(200).render('services', { page_name: 'services' });
};

exports.getTeamPage = (req, res) => {
  res.status(200).render('team', { page_name: 'team' });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', { page_name: 'about' });
};



