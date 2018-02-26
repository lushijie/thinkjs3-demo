/*
* @Author: lushijie
* @Date:   2017-11-29 09:27:47
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-24 10:25:57
*/
import {
  graphql,
  GraphQLSchema,

  GraphQLNonNull,

  GraphQLEnumType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLInputType,
  ID,

  buildSchema,
  printSchema,

  isValidJSValue

} from 'graphql';
// const graphql = require('graphql');

module.exports = class extends think.Controller {
  constructor(...props) {
    super(...props);
  }

  async indexAction() {
    return this.display();
  }

  async searchAction() {
    let objectQuery = new GraphQLObjectType({
      name: 'QueryDemo',
      fields: {
        hello: {
          type: new GraphQLNonNull(GraphQLString), // GraphQLString GraphQLInt, GraphQLFloat, GraphQLBoolean, ID
          resolve: function () {
            return 'hello 666';
          }
        },
        world: {
          type: GraphQLString,
          resolve: function () {
            return 'world 666';
          }
        }
      }
    });
    let schema = new GraphQLSchema({query: objectQuery});
    let query = '{ hello }';
    let result = await graphql(schema, query);
    console.log(result);
    //console.log(printSchema(schema));

    let schema2 = buildSchema(`
      schema {
        query: QueryDemo
      }
      type QueryDemo {
        hello: String!
        world: String
      }
    `);

    let rootValue = {
      hello: 'hello123',
      world: 'world123'
    }

    let result2 = await graphql(schema2, query, rootValue);
    console.log(result2);

    // console.log(isValidJSValue('aa11223', GraphQLInt))
    return this.json(result);
  }
}
