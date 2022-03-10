import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Grid, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useBook } from './use-book';
import { Genres } from './Genres';
import { Header } from './Header';

export const BookDetail: React.VoidFunctionComponent = () => {
  const { bookId } = useParams();
  const { data: book } = useBook(bookId!!);

  if (!book) return null;

  return (
    <>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        href=".."
      >
        Back to List
      </Button>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Header title={book.title} author={book.author} publisher={book.publisher} />
            <Grid container>
              <Grid item xs={12} md={8}>
                <Genres genre={book.genre} subgenre={book.subgenre} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="overline">Height:</Typography>
                <Typography component="span">{book.height}</Typography>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
