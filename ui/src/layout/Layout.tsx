import { Container, createTheme, CssBaseline, LinkProps, StyledEngineProvider } from '@mui/material';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import { Navbar } from './Navbar';
import { LinkBehavior } from './LinkBehavior';

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: { component: LinkBehavior } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: { LinkComponent: LinkBehavior },
    },
  },
});

const appStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
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
          <Container
            maxWidth="sm"
            component="main"
            sx={{ pt: 3 }}
          >
            <Outlet />
          </Container>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
