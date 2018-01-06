/*
* @Author: lushijie
* @Date:   2017-08-13 18:51:35
* @Last Modified by:   lushijie
* @Last Modified time: 2017-12-27 15:54:58
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
    console.log('this.websocket=>', this.websocket.id);
    // console.log('this.ctx.websocket=>',this.ctx.websocket);
    clients.push(this.ctx.websocket);
    console.log('创建新连接 clients.length=', clients.length)
    // 只给自己对应的客户端发送消息
    // this.emit('opend', 'This client opened successfully!');

    // 给所有的客户端发送消息
    //this.broadcast('joined', 'There is a new client joined successfully!')
  }

  addUserAction() {
    this.broadcast('addUserCallBack', this.wsData);
    // console.log(this.wsData); // this.req.websocketData, this.data is deprecated
    // console.log(this.websocket); // this.req.websocket
    // console.log(this.isWebsocket); // this.isMethod('WEBSOCKET')

  }
}
