import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Box, Divider, ListItem, Stack,
} from '@mui/material';
import { useCart } from './cart-context';
import { Book } from '../common/Book';

const emptyPlaceholder = (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    color="text.secondary"
  >
    No Items
  </Box>
);

const renderCartItem = (item: Book) => (
  <ListItem key={item.id}>
    <Typography>
      {item.title}
    </Typography>
    {' - '}
    <Typography color="text.secondary">
      {item.author}
    </Typography>
  </ListItem>
);

export const Cart: React.VoidFunctionComponent = () => {
  const { items } = useCart();
  const hasItems = !!items.length;

  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="h4">Your cart</Typography>
      </Box>
      <Divider />
      {!hasItems && emptyPlaceholder}
      {hasItems && items.map((item) => renderCartItem(item))}
      <Divider />
    </Stack>
  );
};
