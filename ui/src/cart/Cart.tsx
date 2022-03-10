import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Divider, Stack } from '@mui/material';

export const Cart: React.VoidFunctionComponent = () => (
  <Stack spacing={2}>
    <Box>
      <Typography variant="h4">Your cart</Typography>
    </Box>
    <Divider />
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="text.secondary"
    >
      No Items
    </Box>
    <Divider />
  </Stack>
);
