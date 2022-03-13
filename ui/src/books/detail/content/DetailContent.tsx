import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Button, CardActions, Grid, Stack, Typography,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ShoppingCart } from '@mui/icons-material';
import { useBook } from './use-book';
import { Genres } from './Genres';
import { Header } from './Header';
import { useCart } from '../../../cart/cart-context';

export const DetailContent: React.VoidFunctionComponent = () => {
  const { bookId } = useParams();
  const { add: addBookToCart } = useCart();
  const { data: book } = useBook(bookId!!);

  if (!book) return null;

  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Header title={book.title} author={book.author} publisher={book.publisher} />
          <Grid container>
            <Grid item xs={12} md={8}>
              <Genres genre={book.genre} subgenre={book.subgenre} />
            </Grid>
            <Grid item xs={12} md={4} className="height">
              <Typography variant="overline">Height:</Typography>
              <Typography component="span">{book.height}</Typography>
            </Grid>
          </Grid>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          startIcon={<ShoppingCart />}
          variant="outlined"
          onClick={() => addBookToCart(book)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};
