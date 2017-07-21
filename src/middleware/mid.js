/*
* @Author: lushijie
* @Date:   2017-07-21 11:04:51
* @Last Modified by:   lushijie
* @Last Modified time: 2017-07-21 11:07:53
*/
module.exports = (options = {}) => {
  return (ctx, next) => {
    console.log('自定义middleware');
    return next();
  };
};

