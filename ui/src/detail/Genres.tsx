import { Box, Chip, Typography } from '@mui/material';
import React from 'react';

export type GenresProps = {
  genre: string;
  subgenre: string;
};
export const Genres: React.VoidFunctionComponent<GenresProps> = (
  {
    genre,
    subgenre,
  },
) => (
  <Box>
    <Typography variant="overline">Genre:</Typography>
    {
      [genre, subgenre].map(
        (item) => (
          <Chip
            label={item}
            size="small"
            sx={{ ml: 0.5 }}
            key={item}
          />
        ),
      )
    }
  </Box>
);
