/*
* @Author: lushijie
* @Date:   2017-08-23 18:56:12
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-25 17:08:44
*/
const Sequelize = require('sequelize');
module.exports = class extends think.Sequelize {
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
        alias: Sequelize.STRING(255)
      },
      options: {
        timestamps: false,
        freezeTableName: true,
      }
    }
  }

  test() {
    return this.findAll();
  }
}
