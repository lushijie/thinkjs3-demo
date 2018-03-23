/*
* @Author: lushijie
* @Date:   2017-07-16 18:09:58
* @Last Modified by:   lushijie
* @Last Modified time: 2018-03-19 15:31:00
*/
module.exports = {
  rules: {
    _isThinkjs: function(validValue, {ctx, currentQuery, rule, rules, validName}) {
      return validValue;
    },
    isThinkjs: function(value, {ctx, currentQuery, parsedValidValue, rule, rules, validName, validValue }) {
      return value === 'thinkjs';
    },
    checkArray: function(value, {ctx, currentQuery, parsedValidValue, rule, rules, validName, validValue }) {
      console.log(value);
    }
  },
  messages: {
    required: '{name}不能为空',
    isThinkjs: '{name} should equal string thinkjs',
    ASD_DS: [1001, 'EFF']
  }
}
