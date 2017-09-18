// module.exports = [
//   ['/restful/api/:id?', 'rest'],
//   // ['/restful/api/:id?', '/restful/api', 'rest']
//   [ /^\/user\/(\w+)$/, '/router/user/getInfoByName?name=:1'],
// ];

module.exports = [
  {
    match: /^\/restful/,
    rules: [
      ['/restful/api/:id?', 'rest'],
    ]
  },
  [ /^\/user\/(\w+)$/, '/router/user/getInfoByName?name=:1'],
  [ /^\/pad\/.*/, '/pad/index?name=:1'],
]
