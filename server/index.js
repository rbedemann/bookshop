const express = require('express');
const bodyParser = require('body-parser');
const csv = require('csvtojson');
const cors = require('cors');

const server = express();
const router = express.Router();

//accept only JSON
server.use(bodyParser.json());
server.use(cors());

// healthcheck API
router.get('/ping', (req, res) => res.send('pong'));

router.get('/books', async (req, res) => {
  const jsonBooks = await csv().fromFile('./books.csv');
  res.send(jsonBooks);
});

//set port and log to the console
server.use('/api', router);
server.listen(3000, () => console.log('server listening'));
