import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DetailContent } from './content';

export const DetailPage: React.VoidFunctionComponent = () => (
  <>
    <Button
      variant="text"
      startIcon={<ArrowBackIcon />}
      href=".."
    >
      Back to List
    </Button>
    <DetailContent />
  </>
);
