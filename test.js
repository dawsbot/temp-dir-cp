import path from 'path';
import fs from 'fs';

import test from 'ava';
import tempDirCp from './';

test('tempDirCp', t => {
  // catches errors
  t.throws(() => tempDirCp(false), TypeError);

  const tmpPath = tempDirCp('fixtures');
  t.regex(tmpPath, /fixtures/);
  t.true(fs.existsSync(tmpPath));
  t.regex(fs.readFileSync(path.join(tmpPath, 'file.txt')), /⚡️/);
});
