import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { migrate, repository } from './db';

const server = express();
const router = express.Router();

//accept only JSON
server.use(bodyParser.json());
server.use(cors());

// healthcheck API
router.get('/ping', (req, res) => res.send('pong'));

router.get('/books', async (req, res) => {
  res.send(await repository.getAllBooks());
});

router.get('/books/:bookId', async (req, res) => {
  const book = await repository.getBook(req.params.bookId);

  if (!book) {
    res.status(404).send();
    return;
  }

  res.send(book);
});

//set port and log to the console
server.use('/api', router);

migrate().then(() => {
  server.listen(3000, () => console.log('server listening'));
});
