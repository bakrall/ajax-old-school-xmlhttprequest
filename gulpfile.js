const gulp = require('gulp'),
  connect = require('gulp-connect');
 
const runServer = () => {
  connect.server({
    root: 'app'
  });
}

exports.default = runServer;