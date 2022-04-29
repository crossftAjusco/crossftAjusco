import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: '0px 5px 7px -7px',
  p: 1,
};

export const Zoom = ({ imgPost }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

//console.log(imgPost)

  return (
    <div>
      <CardMedia
        component="img"
        image={imgPost}
        onClick={handleOpen}
        style={{ cursor: 'crosshair' }}
      />

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img"
            image={imgPost}
            onClick={handleClose}
            style={{ cursor: 'crosshair' }}
          />
        </Box>
      </Modal>
    </div>
  );
};
