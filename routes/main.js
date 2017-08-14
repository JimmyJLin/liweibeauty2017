const express = require('express');
const data = require('../app/data/data.json');
const sha1 = require('sha1');

const main = express.Router();


/* api routes */
main.get('/', (req, res) => {
  res.render('pages/index', {data: data});
  const url = req.query
  const signature = url.signature;
  const echostr = url.echostr;

  const token = 'abc123456789'
  const timestamp = url.timestamp;
  const nonce = url.nonce;

  const longStr = token + timestamp + nonce;

  const tempArry = longStr.split('');

  const alphaArry = tempArry.sort();

  const tempStr = alphaArry.join('');

  const sha1Encrypt = sha1(tempStr);

  // console.log('longStr', longStr);
  // console.log('tempArry', tempArry);
  // console.log('alphaArry', alphaArry);
  // console.log('tempStr', tempStr);

  console.log('signature', signature);
  // console.log('sha1Encrypt', sha1Encrypt);

  if (url.signature === url.signature) {
    console.log("true", signature)
    return true
  } else {
    console.log("false")
    return false

  }


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
