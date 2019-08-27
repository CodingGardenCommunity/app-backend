const { exec } = require('child_process');

const file = 'coverage/lcov-report/index.html';

if (process.platform === 'win32') exec(`start ${file}`);
else exec(`open ${file}`);
