/*
* @Author: lushijie
* @Date:   2017-08-13 18:51:35
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-03 10:16:56
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
    this.emit('opend', 'This client opened successfully!')
    this.broadcast('joined', 'There is a new client joined successfully!')
  }

  addUserAction() {
    // console.log('addUserAction ...', this.data);
    // console.log(this.ctx.io) ？？？
    // console.log(this.wsData); // this.req.websocketData
    // console.log(this.websocket); // this.req.websocket
    // console.log(this.isWebsocket); // this.isMethod('WEBSOCKET')
    this.broadcast('addUserCallBack', this.wsData);
    // return this.success();
  }
}
