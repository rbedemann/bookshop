import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Book } from '../../common/Book';
import { makeStyles } from '@material-ui/core/styles';

const cardStyles = makeStyles({
  root: {
    minWidth: '50%',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {book.Title}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {book.Author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book in detail</Button>
      </CardActions>
    </Card>
  );
};
