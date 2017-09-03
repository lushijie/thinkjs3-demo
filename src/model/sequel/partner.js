/*
* @Author: lushijie
* @Date:   2017-08-28 10:20:00
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-03 16:11:46
*/
module.exports = class extends think.Sequel {
  constructor(...props) {
    super(...props);
  }

  get schema() {
    return {
      attributes: {
        id: {
          type: think.Sequel.Sequel.BIGINT,
          primaryKey: true
        },
        playerId: think.Sequel.Sequel.BIGINT,
        name: think.Sequel.Sequel.STRING(255),
      },
      // options: {
      //   timestamps: false,
      //   freezeTableName: true,
      //   tableName: 'think_partner',
      // }
    }
  }
}
