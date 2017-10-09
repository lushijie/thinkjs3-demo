/*
* @Author: lushijie
* @Date:   2017-08-13 18:51:35
* @Last Modified by:   lushijie
* @Last Modified time: 2017-10-09 15:24:22
*/

let ids = [];
module.exports = class extends think.Controller {

  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    return this.display();
  }

  closeAction() {
    let socketId = this.websocket.id;
    console.log('断开连接', socketId);
    ids = ids.filter(val => val !== socketId);
  }

  openAction() {
    console.log();
    let socketId = this.websocket.id;
    console.log('创建连接', socketId);
    ids.push(socketId);
    this.emit('opend', 'This client opened successfully!')
    this.broadcast('joined', 'There is a new client joined successfully!')
  }

  addUserAction() {
    console.log('当前连接列表：', ids);
    this.ctx.req.io.sockets.connected[ids[0]].emit('addUserCallBack', '只有第一个可以收到这个消息');
    // console.log('addUserAction ...', this.data);
    // console.log(this.ctx.req.io);
    console.log(this.wsData); // this.req.websocketData
    // console.log(this.websocket); // this.req.websocket
    // console.log(this.isWebsocket); // this.isMethod('WEBSOCKET')
    // this.broadcast('addUserCallBack', this.wsData);
    // return this.success();
  }
}
