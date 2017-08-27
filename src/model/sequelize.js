/*
* @Author: lushijie
* @Date:   2017-08-23 18:56:12
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-27 11:21:18
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
        tableName: 'cdn_alias'
      }
    }
  }

  async test() {
    console.log('think.Sequelize 属性 this.models=', this.models);
    console.log('think.Sequelize 属性 this.tableName=', this.tableName);
    console.log('think.Sequelize 属性 this.sequelize2',(await this.sequelize2('sequelize').findAll()).length, '------');
    return this.findAll();
  }
}
