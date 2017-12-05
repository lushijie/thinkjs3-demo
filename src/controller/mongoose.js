/*
* @Author: lushijie
* @Date:   2017-08-31 14:56:26
* @Last Modified by:   lushijie
* @Last Modified time: 2017-12-05 09:42:49
*/
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;

module.exports = class extends think.Controller {
  constructor(...props) {
    super(...props);
  }

  // async index2Action() {
  //   let Player = this.mongoose('mongoose/article', {type: 'mongoose'});
  //   let player = {name: 'lushijie', id: new Date().getTime()};
  //   this.json(await Player.savePlayer(player));
  // }

  // async createDepartmentAction() {
  //   let Department = this.mongoose('mongoose/department', {type: 'mongoose'});
  //   await Department.create({ name: '市场部', id: '1000'});
  //   await Department.create({ name: '销售部', id: '1001'});
  //   await Department.create({ name: '行政部', id: '1002'});
  //   const result = await Department.find();
  //   this.json(result);
  // }

  // async createEmployeeAction() {
  //   let Employee = this.mongoose('mongoose/employee', {type: 'mongoose'});
  //   await Employee.create({ name: 'Tom', id: '1000', dep: '59eff824d455d5b177292752'});
  //   await Employee.create({ name: 'Lucy', id: '1001', dep: '59eff824d455d5b177292751'});
  //   await Employee.create({ name: 'Lily', id: '1002', dep: '59eff824d455d5b177292751'});
  //   await Employee.create({ name: 'Jack', id: '1002', dep: '59eff824d455d5b177292753'});
  //   const result = await Employee.find();
  //   this.json(result);
  // }

  async testAction() {
    const Grouping2Employee = this.model('mongoose/grouping2employee');
    const data = await Grouping2Employee.find().populate('employee').exec();
    this.success(data);
  }

  async findEmployeeAction() {
    let Employee = this.mongoose('mongoose/employee', {type: 'mongoose'});
    let Department = this.mongoose('mongoose/department', {type: 'mongoose'});
    // let result = await Employee.find().populate('dep').exec();
    let result1 = await Employee.find();
    let result2 = await Department.find();
    // console.log(result1);
    // console.log('=====');
    // console.log(result2);
    this.json('ok');
  }
}
