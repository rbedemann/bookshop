import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import makeStyles from '@mui/styles/makeStyles';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Book } from '../../../common/Book';

const cardStyles = makeStyles({
  title: {
    fontSize: 14,
  },
});

export type BookCardProps = {
  book: Book;
};

export const BookCard: React.VoidFunctionComponent<BookCardProps> = (
  {
    book,
  },
) => {
  const classes = cardStyles();
  const location = useLocation();

  return (
    <Card className="book">
      <CardContent>
        <Typography variant="h5" component="h2">
          {book.title}
        </Typography>
        <Typography
          component="h3"
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {book.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component={RouterLink}
          state={{
            backgroundLocation: location,
          }}
          to={book.id}
        >
          Book in detail
        </Button>
      </CardActions>
    </Card>
  );
};
