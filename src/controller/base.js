module.exports = class extends think.Controller {
  __before(){
    // console.log('调用父级的__before');
    return true;
  }
}
