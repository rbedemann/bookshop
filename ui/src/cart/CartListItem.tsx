import {
  Chip, ListItem, ListItemIcon, Stack,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Delete } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { CartItem } from './CartItem';
import { useCart } from './cart-context';

export type CartListItemProps = {
  item: CartItem
};
export const CartListItem: React.VoidFunctionComponent<CartListItemProps> = ({ item }) => {
  const { remove, increase, decrease } = useCart();

  return (
    <ListItem
      className="cart-item"
      secondaryAction={(
        <IconButton edge="end" aria-label="delete" onClick={() => remove(item)} className="cart-item-remove">
          <Delete />
        </IconButton>
      )}
    >
      <ListItemIcon>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ mr: 2 }}>
          <Chip
            className="cart-item-decrease"
            label="-"
            onClick={() => decrease(item)}
            size="small"
            variant="outlined"
          />
          <Chip className="cart-item-amount" label={item.quantity} color={item.quantity > 1 ? 'primary' : 'default'} />
          <Chip
            className="cart-item-increase"
            label="+"
            onClick={() => increase(item)}
            size="small"
            variant="outlined"
          />
        </Stack>
      </ListItemIcon>
      <Typography className="cart-item-title">
        {item.book.title}
      </Typography>
      {' - '}
      <Typography color="text.secondary" className="cart-item-author">
        {item.book.author}
      </Typography>
    </ListItem>
  );
};
