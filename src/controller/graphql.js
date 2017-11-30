/*
* @Author: lushijie
* @Date:   2017-11-29 09:27:47
* @Last Modified by:   lushijie
* @Last Modified time: 2017-11-30 14:02:20
*/

const graphql = require('graphql');

module.exports = class extends think.Controller {
  constructor(...props) {
    super(...props);
  }

  async indexAction() {
    let queryType = new graphql.GraphQLObjectType({
      name: 'Query123',
      fields: {
        hello: {
          type: graphql.GraphQLString,
          resolve: function () {
            return 'hello world';
          }
        }
      }
    });

    let schema = new graphql.GraphQLSchema({query: queryType});

    return this.display();
    // this.json(await graphql.graphql(schema, '{ hello }'));
  }
}
