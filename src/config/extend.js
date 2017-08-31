const view = require('think-view');
const model = require('think-model');
const email = require('think-email');
const fetch = require('think-fetch');
const websocket = require('think-websocket');
const cache = require('think-cache');
const session = require('think-session');
const sequelize = require('think-sequelize');
const mongoose = require('think-mongoose');

module.exports = [
  view, //make application support view
  model(think.app),
  email,
  fetch,
  websocket(think.app),
  cache,
  session,
  sequelize(think.app),
  mongoose(think.app)
];

