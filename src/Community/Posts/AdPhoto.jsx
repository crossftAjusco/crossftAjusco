import React, { useState } from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';

export const AdPhoto = () => {
  const styles = {
    marginTop: '17px',
    marginLeft: '20px',
  };

  const [photo, setPhoto] = useState('');

  const handlePhoto = () => {
    console.log('adding photo');
  };

  return (
    <div>
      <IconButton onClick={handlePhoto} style={styles}>
        <PhotoCameraIcon sx={{ fontSize: 27 }}/>
      </IconButton>
    </div>
  );
};
