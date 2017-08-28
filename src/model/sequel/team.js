/*
* @Author: lushijie
* @Date:   2017-08-28 10:20:00
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-28 10:35:50
*/
const Sequelize = require('sequelize');
module.exports = class extends think.Sequel {
  constructor(...props) {
    super(...props);
  }

  get schema() {
    return {
      attributes: {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true
        },
        name: Sequelize.STRING(255),
      },
      options: {
        timestamps: false,
        freezeTableName: true,
        tableName: 'think_team',
      }
    }
  }
}
