'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL ||
                      'mongodb://localhost/project1';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
                      'mongodb://localhost/project1';
exports.PORT = process.env.PORT || 8080;
exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000';
