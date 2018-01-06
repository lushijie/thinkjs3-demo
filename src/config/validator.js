/*
* @Author: lushijie
* @Date:   2017-07-16 18:09:58
* @Last Modified by:   lushijie
* @Last Modified time: 2017-12-23 21:37:34
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
    isThinkjs: '{name} should equal string thinkjs',
    ASD_DS: [1001, 'EFF']
  }
}
