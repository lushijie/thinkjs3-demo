/*
* @Author: lushijie
* @Date:   2017-09-10 16:04:18
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-10 16:13:28
*/

module.exports = class extends think.Model {
  get tableName() {
    return 'think_player';
  }

  get relation() {
    return {
      partner: {
        type: think.Model.HAS_ONE,
        key: 'id',
        fKey: 'playerId'
      }
    };
  }

  getAllPlayers() {
    return this.select();
  }
}
