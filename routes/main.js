const express = require('express');
const data = require('../app/data/data.json');

const main = express.Router();


/* api routes */
main.get('/', (req, res) => {
  res.render('pages/index', {data: data});
});

main.get('/services', (req, res) => {
  res.render('pages/services', {data: data});
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
