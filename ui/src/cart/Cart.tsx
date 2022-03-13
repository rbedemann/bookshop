import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Divider, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { Delete } from '@mui/icons-material';
import { useCart } from './cart-context';
import { CartListItem } from './CartListItem';

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

export const Cart: React.VoidFunctionComponent = () => {
  const { items, clear } = useCart();
  const hasItems = !!items?.length;

  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="h4">Your cart</Typography>
      </Box>
      <Divider />
      {!hasItems && emptyPlaceholder}
      {hasItems && items.map((item) => <CartListItem item={item} key={item.book.id} />)}
      <Divider />
      <Box>
        <Button
          variant="text"
          startIcon={<Delete />}
          size="small"
          color="error"
          onClick={clear}
          className="cart-remove-all"
        >
          Delete All
        </Button>
      </Box>
    </Stack>
  );
};
