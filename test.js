/*
* @Author: lushijie
* @Date:   2017-10-25 11:24:30
* @Last Modified by:   lushijie
* @Last Modified time: 2017-10-25 19:01:23
*/
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;
let options = {
  useMongoClient: true
};
let authURL = 'mongodb://lushijie:lushijiepwd@127.0.0.1:27000/think-demo?';
let db = mongoose.createConnection(authURL, options);

let departmentSchema = new Schema({
  id: String, // 部门编号
  name: String, // 名称
});

let employeeSchema = new Schema({
  id: String,   // 工号
  name: String, // 姓名
  dep: {        // 部门
    type: Schema.Types.ObjectId,
    // ref: 'think_department'
  }
});

let Department = db.model('think_department', departmentSchema, 'think_department');
let Employee = db.model('think_employee', employeeSchema, 'think_employee');

(async function() {
  try {
    // let result = await Department.find();
    // console.log(result);

    let result2 = await Employee.find({}).populate('dep', {name: 1, _id: 0}, 'think_department');
    console.log(result2);
  } catch(e) {
    console.log(e);
  }
})()
