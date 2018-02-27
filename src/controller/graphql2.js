/*
* @Author: lushijie
* @Date:   2018-02-26 11:54:28
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-27 14:55:25
*/
const { makeExecutableSchema } = require('graphql-tools');

module.exports = class extends think.Controller {
  constructor(...props) {
    super(...props);
  }

  async indexAction() {
    // Some fake data
    const books = [
      {
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
      },
      {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
      },
    ];

    // The GraphQL schema in string form
    const typeDefs = `
      type Query { books: [Book] }
      type Book { title: String, author: String }
    `;

    // The resolvers
    const resolvers = {
      Query: { books: () => books },
    };

    const schema = makeExecutableSchema({
      typeDefs,
      resolvers,
    });

    const graphqlResult = await this.thinkGraphql({
      schema,
      // tracing: true
    });

    return this.json(graphqlResult);
  }
}
