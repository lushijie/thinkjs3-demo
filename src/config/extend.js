const view = require('think-view');
const model = require('think-model');
const email = require('think-email');
const fetch = require('think-fetch');
const websocket = require('think-websocket');
const cache = require('think-cache');
const session = require('think-session');
const sequelize = require('think-sequelize');
const mongoose = require('think-mongoose');
const mongo = require('think-mongo');
const graphql = require('think-apollo-graphql');

module.exports = [
  view,
  email,
  fetch,
  cache,
  session,
  model(think.app),
  websocket(think.app),
  sequelize(think.app),
  mongoose(think.app),
  mongo(think.app),
  graphql
];

