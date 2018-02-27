/*
* @Author: lushijie
* @Date:   2017-07-21 09:51:56
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-27 16:02:52
*/
// const { runHttpQuery } = require('apollo-server-core');

module.exports = {
  myExtend() {
    return 'This is extend method for controller...';
  },

  // thinkGraphql(options) {
  //   if (arguments.length !== 1) {
  //     throw new Error("Graphql expects exactly one argument, got " + arguments.length);
  //   }
  //   return runHttpQuery([this.ctx], {
  //     method: this.ctx.method,
  //     options: options,
  //     query: this.ctx.method === 'GET' ? this.ctx.param() : this.ctx.post()
  //   }).then(res => {
  //     return res;
  //   }, err => {
  //     if ('HttpQueryError' !== err.name) {
  //       throw err;
  //     }
  //     return err;
  //   });
  // }
}
