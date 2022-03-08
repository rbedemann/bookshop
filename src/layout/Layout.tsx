import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';

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
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Navbar />
        <main className={classes.content}>
          <Outlet />
        </main>
      </div>
    </>
  );
};
