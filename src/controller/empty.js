/*
* @Author: lushijie
* @Date:   2017-08-25 18:47:57
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-25 19:18:18
*/

module.exports = class extends think.Controller {
  __call() {
    return this.success('迷路了吧');
  }
}
