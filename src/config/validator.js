/*
* @Author: lushijie
* @Date:   2017-07-16 18:09:58
* @Last Modified by:   lushijie
* @Last Modified time: 2017-08-13 17:46:07
*/
module.exports = {
  rules: {
    _isThinkjs: function(validValue, {ctx, currentQuery, rule, rules, validName}) {
      return validValue;
    },
    isThinkjs: function(value, {ctx, currentQuery, parsedValidValue, rule, rules, validName, validValue }) {
      return value === 'thinkjs';
    }
  },
  messages: {
    required: '{name}不能为空',
    isThinkjs: '{name} should equal string thinkjs'
  }
}
