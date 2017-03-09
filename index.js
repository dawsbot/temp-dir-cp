'use strict';
const os = require('os');
const path = require('path');
const fs = require('fs-extra');

module.exports = sourceDir => {
  if (typeof sourceDir !== 'string') {
    throw new TypeError(`sourceDir must be string. Found ${typeof sourceDir}`);
  }
  const fullPath = path.resolve(sourceDir);
  const basename = path.basename(fullPath);
  const tmpDir = path.join(os.tmpdir(), Math.random().toString().slice(8), basename);
  fs.copySync(sourceDir, tmpDir);
  return tmpDir;
};
