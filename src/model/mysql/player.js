/*
* @Author: lushijie
* @Date:   2017-09-10 14:44:34
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-10 16:28:25
*/

module.exports = class extends think.Model {
  // get schema() {
  //   return {
  //     id: {
  //       type: 'int(11)',
  //       primary: true,
  //       autoIncrement: true
  //     },
  //     name3: {
  //       type: 'varchar(255)',
  //       default: 'thinkjs'
  //     }
  //   }
  // }

  getAllPlayers() {
    return this.select();
  }
}
