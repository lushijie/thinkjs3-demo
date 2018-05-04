/*
* @Author: lushijie
* @Date:   2017-08-13 18:51:35
* @Last Modified by:   lushijie
* @Last Modified time: 2018-04-13 11:33:10
*/

let clients = [];
module.exports = class extends think.Controller {

  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    return this.display('websocket_ws');
  }

  closeAction() {
    let socket = this.websocket;
    clients = clients.filter(val => val !== socket);
    console.log('断开连接 clients.length=', clients.length)
  }

  openAction() {
    clients.push(this.ctx.websocket);
    console.log('创建新连接 clients.length=', clients.length)
  }

  addUserAction() {
    // this.ctx.websocket.send('ssss'); // 只给自己发送
    console.log('this.ctx.req.wss=', this.ctx.req.wss.clients);
    // console.log(this.ctx.wss.clients[0].send(Math.random().toString()));
    this.broadcast('addUserCallBack', this.wsData);

  }
}
