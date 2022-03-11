import React from 'react';
import { Box, Container, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DetailContent } from './content';

export const DetailModal: React.VoidFunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Modal
      open
      onClose={() => navigate('..')}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box sx={{ width: '100%', maxWidth: 'sm' }}>
        <DetailContent />
      </Box>
    </Modal>
  );
};
