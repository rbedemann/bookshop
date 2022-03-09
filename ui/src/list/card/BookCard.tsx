import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import makeStyles from '@mui/styles/makeStyles';
import { Book } from '../../common/Book';

const cardStyles = makeStyles({
  title: {
    fontSize: 14,
  },
});

export type BookCardProps = {
  book: Book;
};

export const BookCard: React.VoidFunctionComponent<BookCardProps> = ({
  book,
}) => {
  const classes = cardStyles();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {book.title}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {book.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book in detail</Button>
      </CardActions>
    </Card>
  );
};
