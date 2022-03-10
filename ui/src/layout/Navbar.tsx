import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import makeStyles from '@mui/styles/makeStyles';
import { Badge } from '@mui/material';
import { useCart } from '../cart/cart-context';

const styles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export const Navbar: React.VoidFunctionComponent = () => {
  const classes = styles();
  const { itemCount } = useCart();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          size="large"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Book Shop
        </Typography>
        <Button color="inherit" href="cart">
          {itemCount ? (
            <Badge badgeContent={itemCount} color="secondary">
              Cart
            </Badge>
          ) : 'Cart'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
