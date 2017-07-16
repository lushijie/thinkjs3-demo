/*
* @Author: lushijie
* @Date:   2017-07-16 18:09:58
* @Last Modified by:   lushijie
* @Last Modified time: 2017-07-16 18:11:21
*/
module.exports = {
  rules: {
    _newrule: function(validValue, { currentQuery }) {
      return validValue;
    },
    newrule: function(value, { parsedValidValue }) {
      return value === parsedValidValue;
    }
  },
  messages: {
    newrule: 'this is newrule custom message'
  }
}
