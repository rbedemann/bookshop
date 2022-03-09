import { createTheme, CssBaseline, StyledEngineProvider } from '@mui/material';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import { Navbar } from './Navbar';

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
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <Navbar />
          <main className={classes.content}>
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
