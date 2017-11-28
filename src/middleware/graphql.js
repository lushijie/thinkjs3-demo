/*
* @Author: lushijie
* @Date:   2017-11-28 12:06:48
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-28 12:07:07
*/
module.exports = (options = {}) => {
  return (ctx, next) => {
    console.log('graphql');
    return next();
  };
};
