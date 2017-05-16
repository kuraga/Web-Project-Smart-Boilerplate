'use strict';

var globSync = require('glob').sync,
    path = require('path');

var babelOptions = {
  presets: ['es2015', 'stage-1'],
  plugins: ['transform-runtime'],
  compact: false
};

var testFilesGlob = path.join(process.cwd(), '*Test.js');
var testFiles = globSync(testFilesGlob);

require('babel-register')(babelOptions);

for(var i = 0; i < testFiles.length; ++i) {
  require(testFiles[i]);
}
