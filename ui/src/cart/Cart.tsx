import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Box, Chip, Divider, ListItem, ListItemIcon, Stack,
} from '@mui/material';
import Button from '@mui/material/Button';
import { Delete } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useCart } from './cart-context';
import { CartItem } from './CartItem';

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

const renderCartItem = (item: CartItem, onDelete: Function) => (
  <ListItem
    key={item.book.id}
    secondaryAction={(
      <IconButton edge="end" aria-label="delete" onClick={() => onDelete()}>
        <Delete />
      </IconButton>
    )}
  >
    <ListItemIcon>
      <Chip label={item.quantity} color={item.quantity > 1 ? 'primary' : 'default'} />
    </ListItemIcon>
    <Typography>
      {item.book.title}
    </Typography>
    {' - '}
    <Typography color="text.secondary">
      {item.book.author}
    </Typography>
  </ListItem>
);

export const Cart: React.VoidFunctionComponent = () => {
  const { items, clear, remove } = useCart();
  const hasItems = !!items?.length;

  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="h4">Your cart</Typography>
      </Box>
      <Divider />
      {!hasItems && emptyPlaceholder}
      {hasItems && items.map((item) => renderCartItem(item, () => remove(item)))}
      <Divider />
      <Box>
        <Button
          variant="text"
          startIcon={<Delete />}
          size="small"
          color="error"
          onClick={clear}
        >
          Delete All
        </Button>
      </Box>
    </Stack>
  );
};
