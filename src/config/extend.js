const view = require('think-view');
const model = require('think-model');
const email = require('think-email');
const fetch = require('think-fetch');

module.exports = [
  view, //make application support view
  model(think.app),
  email,
  fetch
];

