const { mainSeed } = require('./seed');

(async () => {
  try {
    await mainSeed();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    process.exit(0);
  }
})();
