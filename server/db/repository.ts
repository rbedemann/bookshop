import sqlite3 from 'sqlite3';
import config from './database.json';
import { Book } from '../common/Book';

const db = new sqlite3.Database(config.local.filename);

export const getAllBooks = (): Promise<Book[]> =>
  new Promise((resolve, reject) =>
    db.all('SELECT * FROM books', (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    })
  );

export const getBook = (id: string): Promise<Book | undefined> =>
  new Promise((resolve, reject) =>
    db.get('SELECT * FROM books where id= ?', [id], (err, row) => {
      if (err) reject(err);
      resolve(row);
    })
  );
