import { Chip, ListItem, ListItemIcon } from '@mui/material';
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
  const { remove } = useCart();

  return (
    <ListItem
      secondaryAction={(
        <IconButton edge="end" aria-label="delete" onClick={() => remove(item)}>
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
};
