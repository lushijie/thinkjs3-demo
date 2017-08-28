/*
* @Author: lushijie
* @Date:   2017-08-28 10:20:00
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-28 15:47:47
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
        teacherId: think.Sequel.Sequel.BIGINT,
      },
      options: {
        timestamps: false,
        freezeTableName: true,
        tableName: 'think_teacher_player',
      }
    }
  }
}

