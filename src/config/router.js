module.exports = [
  // [/api2\/(.*)/i, '/router/:1', 'get,post'],
  // ['/api/:name', 'router/:name', 'get,post'],
  [/\/rest(?:\/(\d+))?/, '/rest/rest1?id=:1', 'rest'],
];
