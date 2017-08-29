/*
* @Author: lushijie
* @Date:   2017-08-24 09:33:17
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-28 22:25:51
*/
module.exports = class extends think.Controller {
  constructor(...props) {
    super(...props);
  }

  async indexAction() {
    let model1 = this.sequel('sequel/player', {type: 'sequel'});
    // let model2 = this.ctx.sequel('user', {type: 'sequel'});
    // let model3 = think.sequel('user', {type: 'sequel'});
    // return this.json(await model1.findAndCount());
    return this.json(await model1.getAll());
  }

  async relationAction() {
    let type = this.get('type');
    if(type === '1'){
      // belongsTo
      let player = this.sequel('sequel/player', {type: 'sequel'});
      let team = this.sequel('sequel/team', {type: 'sequel'});
      player.belongsTo(team, /*{foreignKey: 'teamId'}*/);
      let result = await player.findAll({
        include: [
          { model: team }
        ]
      });
      return this.json(result);

      // // error Class.playerId
      // let player = this.sequel('sequel/player', {type: 'sequel'});
      // return this.json(await player.belongsToRelation());
    }else if(type === '2') {
      // hasOne
      let player = this.sequel('sequel/player', {type: 'sequel'});
      let partner = this.sequel('sequel/partner', {type: 'sequel'});
      player.hasOne(partner, /*{foreignKey: 'playerId'}*/);
      return this.json(await player.findAll({
        include: [
          {
            model: partner,
          }
        ]
      }));
    }else if(type === '3') {
      // hasMany
      let player = this.sequel('sequel/player', {type: 'sequel'});
      let trophy = this.sequel('sequel/trophy', {type: 'sequel'});
      player.hasMany(trophy, /*{foreignKey: 'playerId'}*/);
      return this.json(await player.findAll({
        include: [
          { model: trophy }
        ]
      }));
    }else if(type === '4') {
      // belongsToMany
      let player = this.sequel('sequel/player', {type: 'sequel'});
      let teacher = this.sequel('sequel/teacher', {type: 'sequel'});
      let teacher_player = this.sequel('sequel/teacher_player', {type: 'sequel'});
      player.belongsToMany(teacher, {
        through: teacher_player
      });
      return this.json(await player.findAll({
        include: [
          { model: teacher }
        ]
      }));

    }
  }

}
