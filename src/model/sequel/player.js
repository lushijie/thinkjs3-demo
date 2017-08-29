/*
* @Author: lushijie
* @Date:   2017-08-28 10:20:00
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-28 22:27:39
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
        teamId: think.Sequel.Sequel.BIGINT, // belongsTo, 为当前模型添加外键
        name: think.Sequel.Sequel.STRING(255),
      },
      options: {
        timestamps: false,
        freezeTableName: true,
        tableName: 'think_player',
      }
    }
  }

  getAll() {
    // console.log('this.tableName in model: ', this.tableName);
    // return getDataValues(await this.sequel('address').findAll());
    // return getDataValues(await this.findAll());
    return this.findAll();
  }

  belongsToRelation() {
    let team = this.sequel('sequel/team', {type: 'sequel'});
    this.belongsTo(team, /*{foreignKey: 'playId'}*/);
    return this.findAll({
      include: [
        { model: team }
      ]
    });
  }
}
