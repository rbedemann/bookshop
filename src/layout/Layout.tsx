import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();

const appStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const Layout: React.VoidFunctionComponent = () => {
  const classes = appStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Navbar />
        <main className={classes.content}>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
};
