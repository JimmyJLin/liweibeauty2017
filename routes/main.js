const express = require('express');

const main = express.Router();


/* api routes */
main.get('/', (req, res) => {
  res.render('pages/index');
});

main.get('/services', (req, res) => {
  res.render('pages/services');
});

main.get('/specials', (req, res) => {
  res.render('pages/specials');
});

main.get('/contact', (req, res) => {
  res.render('pages/contact');
});

main.get('/*', (req, res) => {
  res.render('pages/404');
});

module.exports = main;
