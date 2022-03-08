import { List, ListItem } from '@mui/material';
import React from 'react';
import { BookCard } from './card/BookCard';
import { useBooks } from './use-books';
import makeStyles from '@mui/styles/makeStyles';

const listItemStyles = makeStyles({
  item: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});

export const BookList: React.VoidFunctionComponent = () => {
  const { books } = useBooks();
  const classes = listItemStyles();

  return (
    <List>
      {books.map(book => (
        <ListItem
          key={`${book.Publisher}${book.Author}${book.Title}`}
          className={classes.item}
        >
          <BookCard
            book={book}
            key={`${book.Publisher}${book.Author}${book.Title}`}
          />
        </ListItem>
      ))}
    </List>
  );
};
