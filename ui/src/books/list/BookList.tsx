import { List, ListItem } from '@mui/material';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Alert from '@mui/material/Alert';
import { BookCard } from './card/BookCard';
import { useBooks } from './use-books';

const listItemStyles = makeStyles({
  item: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});

export const BookList: React.VoidFunctionComponent = () => {
  const { data: books, error } = useBooks();
  const classes = listItemStyles();

  return (
    <List className="books">
      {books?.map((book) => (
        <ListItem key={book.id} className={classes.item}>
          <BookCard
            book={book}
            key={`${book.publisher}${book.author}${book.title}`}
          />
        </ListItem>
      ))}
      {error && <Alert severity="error">Could not load your books! 😕</Alert>}
    </List>
  );
};
