/*
* @Author: lushijie
* @Date:   2017-08-13 18:51:35
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-23 10:07:28
*/
const Base = require('./base.js');

module.exports = class extends think.Controller {

  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    return this.display();
  }

  openAction() {
    console.log('ws open ...');
    this.emit('opend', 'This client opened successfully!')
    this.broadcast('joined', 'There is a new client joined successfully!')
    return this.success();
  }

  addUserAction() {
    console.log('addUserAction ...', this.data);
    // console.log(this.ctx.io) ？？？
    // console.log(this.data); // this.req.websocketData
    // console.log(this.websocket); // this.req.websocket
    // console.log(this.isWebsocket); // this.isMethod('WEBSOCKET')
    return this.success();
  }
}
