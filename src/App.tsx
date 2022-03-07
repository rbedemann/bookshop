import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Book } from './common/Book';
import { BookCard } from './list/card/BookCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const CategoryPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    function fetchBooks() {
      fetch('http://localhost:3000/api/books')
        .then(res => res.json())
        .then(books => setBooks(books));
    }

    fetchBooks();
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Book Shop
          </Typography>
          <Button color="inherit">Cart</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <BookList books={books} />
      </main>
    </div>
  );
};

type BookListProps = {
  books: Book[];
};
const BookList: React.VoidFunctionComponent<BookListProps> = ({ books }) => {
  return (
    <>
      {books.map(book => (
        <BookCard
          book={book}
          key={`${book.Publisher}${book.Author}${book.Title}`}
        />
      ))}
    </>
  );
};

export default CategoryPage;
