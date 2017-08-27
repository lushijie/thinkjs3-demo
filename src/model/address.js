/*
* @Author: lushijie
* @Date:   2017-08-27 13:48:41
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-27 17:45:38
*/
/*
* @Author: lushijie
* @Date:   2017-08-23 18:56:12
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-27 13:45:07
*/
module.exports = class extends think.Sequel {
  constructor(...props) {
    super(...props);
  }

  get schema() {
    return {
      attributes: {
        id: {
          type: think.Sequel.sequel.BIGINT,
          primaryKey: true
        },
        userId: think.Sequel.sequel.BIGINT,
        address: think.Sequel.sequel.STRING(255)
      },
      options: {
        timestamps: false,
        freezeTableName: true,
        tableName: 'think_address',
      }
    }
  }

}
