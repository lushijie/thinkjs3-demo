/*
* @Author: lushijie
* @Date:   2017-07-16 18:09:58
* @Last Modified by:   lushijie
* @Last Modified time: 2018-04-13 11:00:09
*/

const Ajv = require('ajv');
const ajv = new Ajv({allErrors: true});

module.exports = {
  rules: {
    _isThinkjs: function(validValue, {ctx, currentQuery, rule, rules, validName}) {
      return validValue;
    },
    isThinkjs: function(value, {ctx, currentQuery, rule, rules, validName, validValue, parsedValidValue}) {
      return value === 'thinkjs';
    },
    checkArray: function(value, {ctx, currentQuery, rule, rules, validName, validValue, parsedValidValue}) {
      console.log(value);
    },
    jsonSchema: function(value, {argName, validName, validValue, parsedValidValue, rule, rules, currentQuery, ctx}) {
      // console.log(validValue);
      let validate = ajv.compile(validValue);
      let valid = validate(value);
      if (valid) return true;
      return {
        data: ajv.errorsText(validate.errors)
      };
    }
  },

  messages: {
    required: '{name}不能为空',
    isThinkjs: '{name} should equal string thinkjs',
    ASD_DS: [1001, 'EFF']
  }
}
