/*
* @Author: lushijie
* @Date:   2017-12-02 17:42:45
* @Last Modified by:   lushijie
* @Last Modified time: 2017-12-02 18:21:14
*/
module.exports = class extends think.Mongoose {

  get schema() {
    const schema = new think.Mongoose.Schema(
      {
        department: {
          type: think.Mongoose.ObjectId,
          ref: `${this.tablePrefix}department`
        }, // 班组，ref后可以通过populate关联查询。
        employee: {
          type: think.Mongoose.ObjectId,
          ref: `${this.tablePrefix}employee`
        }, // 工人
        name: String
      }
    );

    think.mongoose('mongoose/employee', {type: 'mongoose'});
    think.mongoose('mongoose/department', {type: 'mongoose'});

    return schema;
  }
};
