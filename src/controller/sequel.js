/*
* @Author: lushijie
* @Date:   2017-08-24 09:33:17
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-29 16:02:52
*/
module.exports = class extends think.Controller {
  constructor(...props) {
    super(...props);
  }

  async indexAction() {
    let type = this.get('type');
    if(type === '1') {
      let model = this.sequel('sequel/player', {type: 'sequel'});
      return this.json(await model.getAllPlayer());
    }else if(type === '2') {
      let model = this.ctx.sequel('sequel/player', {type: 'sequel'});
      return this.json(await model.findAndCount());
    }else if(type === '3') {
      let model = think.sequel('sequel/player', {type: 'sequel'});
      return this.json(await model.getAllPlayer());
    }
  }

  async testAction() {
    let model = this.sequel('sequel/teacher_player', {type: 'sequel'});
    return this.json(await model.findAndCount());
  }

  async relationAction() {
    let type = this.get('type');
    if(type === '1'){
      // belongsTo
      let player = this.sequel('sequel/player', {type: 'sequel'});
      let team = this.sequel('sequel/team', {type: 'sequel'});
      // player.belongsTo(team);
      let result = await player.findAll({
        include: [
          { model: team }
        ]
      });
      return this.json(result);
    }else if(type === '11') {
      let player = this.sequel('sequel/player', {type: 'sequel'});
      return this.json(await player.belongsToRelation());
    }else if(type === '2') {
      // hasOne
      let player = this.sequel('sequel/player', {type: 'sequel'});
      let partner = this.sequel('sequel/partner', {type: 'sequel'});
      // player.hasOne(partner);
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
      //player.hasMany(trophy);
      return this.json(await player.findAll({
        include: [
          { model: trophy }
        ]
      }));
    }else if(type === '4') {
      // belongsToMany
      let player = this.sequel('sequel/player', {type: 'sequel'});
      let teacher = this.sequel('sequel/teacher', {type: 'sequel'});
      // let teacher_player = this.sequel('sequel/teacher_player', {type: 'sequel'});
      // player.belongsToMany(teacher, {
        // through: teacher_player
      // });
      return this.json(await player.findAll({
        include: [
          { model: teacher }
        ]
      }));

    }
  }

}
