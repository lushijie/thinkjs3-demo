/*
* @Author: lushijie
* @Date:   2017-11-28 12:06:48
* @Last Modified by:   lushijie
* @Last Modified time: 2018-01-11 09:45:55
*/
module.exports = (options = {}) => {
  return (ctx, next) => {
    // ctx.post();
    // console.log(ctx.post());
    console.log('middleware---', ctx.post());
    return next();
  };
};
