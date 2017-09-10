/*
* @Author: lushijie
* @Date:   2017-09-10 14:18:45
* @Last Modified by:   lushijie
* @Last Modified time: 2017-09-10 14:39:41
*/
module.exports = class extends think.Logic {
  __before() {
    console.log('magic logic __before');
    return true;
  }

  index2Action() {
    console.log('magic logic action');
  }

  __after() {
    console.log('magic logic __after');
    return true;
  }
}
