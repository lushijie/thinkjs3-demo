/*
* @Author: lushijie
* @Date:   2017-08-28 10:20:00
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-28 15:43:55
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
        playerId: think.Sequel.Sequel.BIGINT, // hasMany - 添加外键到目标模型
        name: think.Sequel.Sequel.STRING(255),
      },
      options: {
        timestamps: false,
        freezeTableName: true,
        tableName: 'think_trophy',
      }
    }
  }
}
