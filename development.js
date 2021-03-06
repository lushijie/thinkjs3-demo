const Application = require('thinkjs');
const babel = require('think-babel');
const typescript = require('think-typescript');
const watcher = require('think-watcher');
const notifier = require('node-notifier');

const instance = new Application({
  ROOT_PATH: __dirname,
  watcher: watcher,
  transpiler: [babel, {
    presets: [['think-node']],
    // presets: [['think-node', {
    //     "transform-async-to-generator": false
    //   }
    // ]],
    plugins: ['transform-decorators-legacy'],
    babelrc: false
  }],
  notifier: notifier.notify.bind(notifier),
  env: 'development'
});

instance.run();
