const { platform } = require('os');
const {
  promises: { stat },
} = require('fs');
const { exec } = require('child_process');

const file = 'coverage/lcov-report/index.html';

function openFile() {
  switch (platform()) {
    case 'win32':
      return exec(`start ${file}`);
    case 'darwin':
      return exec(`open ${file}`);
    default:
      return exec(`xdg-open ${file}`);
  }
}

(async () => {
  try {
    await stat(file);
    openFile();
  } catch (err) {
    try {
      exec('npm run test', openFile);
    } catch (error) {
      process.stdout.write(err);
      process.exit(1);
    }
  }
})();
