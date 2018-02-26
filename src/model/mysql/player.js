/*
* @Author: lushijie
* @Date:   2017-09-10 14:44:34
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-11 10:52:14
*/

module.exports = class extends think.Model {
  // get schema() {
  //   return {
  //     id: {
  //       type: 'int(11)',
  //       primary: true,
  //       autoIncrement: true
  //     },
  //     name3: {
  //       type: 'varchar(255)',
  //       default: 'thinkjs'
  //     }
  //   }
  // }

  async getAllPlayers() {
    // try {
    //   await this.startTrans(this.db());
    //   const result = await this.model('player').select();
    //   // const result = await this.select();
    //   await this.commit();
    //   return result;
    // } catch(e) {
    //   await this.rollback();
    // }

    // try {
    //   let db = this.db();
    //   await this.startTrans();
    //   const insertId = await this.model('player').db(db).add({
    //     id: 100,
    //     name:'test',
    //     teamId: 1
    //   });
    //   await this.commit()
    //   return insertId;
    // }catch(e) {
    //   await this.rollback();
    //   return 'FAIL';
    // }

    let db = this.db();
    const result = await this.transaction(async () => {
      const insertId = await this.model('player').db(db).add({
        id: 101,
        name:'test',
        teamId: 1
      });
      return insertId;
    });
    return result;

  }
}
