module.exports = [
  ['/restful/api/:id?', 'rest'],
  // ['/restful/api/:id?', '/restful/api', 'rest']
  [ /^\/user\/(\w+)$/, '/router/user/getInfoByName?name=:1'],
];


// [/api2\/(.*)/i, '/router/:1', 'get,post'],
// ['/api/:name', 'router/:name', 'get,post'],
