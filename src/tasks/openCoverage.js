const { platform } = require('os');
const {
  promises: { stat },
} = require('fs');
const { exec } = require('child_process');

const file = 'coverage/lcov-report/index.html';

(async () => {
  try {
    await stat(file);
    if (platform() === 'win32') exec(`start ${file}`);
    else if (platform() === 'darwin') exec(`open ${file}`);
    else exec(`xdg-open ${file}`);
  } catch (err) {
    try {
      exec('npm run test', () => {
        if (platform() === 'win32') exec(`start ${file}`);
        else if (platform() === 'darwin') exec(`open ${file}`);
        else exec(`xdg-open ${file}`);
      });
    } catch (error) {
      process.stdout.write(err);
      process.exit(1);
    }
  }
})();
