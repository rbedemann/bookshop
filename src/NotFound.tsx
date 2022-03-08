import React from 'react';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

export const NotFound: React.VoidFunctionComponent = () => (
  <>
    <Alert severity="error">This page could not be found! 😕</Alert>
    <Link to={'/'}>Back to Home</Link>
  </>
);
