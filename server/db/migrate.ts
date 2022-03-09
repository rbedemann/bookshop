const dbmigrate = require('db-migrate');

const migrate = () =>
  dbmigrate
    .getInstance(true, {
      cwd: __dirname,
    })
    .up();

export default migrate;
