

const fileResolver = require('./lib');

fileResolver('index.js', 'modules/customer');

module.exports = fileResolver;