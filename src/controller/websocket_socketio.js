/*
* @Author: lushijie
* @Date:   2017-08-13 18:51:35
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-14 16:26:33
*/

let ids = [];
module.exports = class extends think.Controller {

  constructor(...arg) {
    super(...arg);
  }

  indexAction() {
    return this.display('websocket_index');
  }

  closeAction() {
    let socketId = this.websocket.id;
    console.log('断开连接', socketId);
    ids = ids.filter(val => val !== socketId);
  }

  openAction() {
    let socketId = this.websocket.id;
    console.log('创建新连接：', socketId);
    ids.push(socketId);
    console.log(`当前存在的连接： ${ids}`);

    // 只给自己对应的客户端发送消息
    this.emit('opend', 'This client opened successfully!');
    // 给所有的客户端发送消息
    this.broadcast('joined', 'There is a new client joined successfully!')
  }

  addUserAction() {
    // this.ctx.req.io.sockets.connected[ids[0]].emit('addUserCallBack', '只有第一个可以收到这个消息');
    // console.log(this.wsData); // this.req.websocketData, this.data is deprecated
    // console.log(this.websocket); // this.req.websocket
    // console.log(this.isWebsocket); // this.isMethod('WEBSOCKET')

    if(this.wsData && this.wsData.room) {
      console.log(`${this.websocket.id} join the room ${this.wsData.room}`);
      this.websocket.join(this.wsData.room);
    }

    //this.broadcast('addUserCallBack', this.wsData);

    // 向 room 中的用户进行广播，不在该 room 的用户不会收到消息
    this.ctx.req.io.to(this.wsData.room).emit('addUserCallBack', this.wsData);
    // 或
    // this.ctx.req.io.of('space1').to(this.wsData.room).emit('addUserCallBack', this.wsData);
  }

  getTunnelDeviceAction() {
    console.log(123123);
  }
}
