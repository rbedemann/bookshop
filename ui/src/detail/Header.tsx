import { Box, Typography } from '@mui/material';
import React from 'react';

export type HeaderProps = {
  title: string;
  author: string;
  publisher: string;
};

export const Header: React.VoidFunctionComponent<HeaderProps> = (
  {
    title,
    author,
    publisher,
  },
) => (
  <Box>
    <Typography component="h2">{title}</Typography>
    <Typography component="h3" variant="caption" color="text.secondary">
      by
      {' '}
      {author}
      {' '}
      - published by
      {' '}
      {publisher}
    </Typography>
  </Box>
);
