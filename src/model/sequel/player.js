/*
* @Author: lushijie
* @Date:   2017-08-28 10:20:00
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-03 20:27:37
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
      },
      relations: [
        { 'sequel/team': think.Sequel.Relation.BELONG_TO },
        { 'sequel/partner': think.Sequel.Relation.HAS_ONE },
        { 'sequel/trophy': think.Sequel.Relation.HAS_MANY },
        {
          'sequel/teacher': think.Sequel.Relation.MANY_TO_MANY,
          options: {
            // through: this.sequel('sequel/teacher_player', {type: 'sequel'}) // wrong, do not use this.sequel in schema
            through: think.sequel('sequel/teacher_player', {type: 'sequel'})
          }
        },
      ]
    }
  }

  getAllPlayer() {
    // let teacher_player = this.sequel('sequel/teacher_player', {type: 'sequel'});
    // console.log('this.tableName in model: ', this.tableName);
    // return this.sequel('sequel/teacher').findAll();
    return this.findAll();
  }

  belongsToRelation() {
    let team = this.sequel('sequel/team', {type: 'sequel'});
    // this.belongsTo(team, /*{foreignKey: 'playId'}*/);
    return this.findAll({
      include: [
        { model: team }
      ]
    });
  }
}
