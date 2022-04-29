import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Form from 'react-bootstrap/Form';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "../../firebase"
import { Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3.5,
};

export const AdPicture = ({ setFile }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFile = async(e) => {
    //detectar archivo
    const localFile = e.target.files[0]
    //console.log(localFile)
    //crear referencia de archivo
    const archRef = ref(storage, `filesCommunity/${localFile.name}`)
    //cargar archivo a firebase storage
    await uploadBytes(archRef, localFile)
    // obtener url de descarga
    const urlFile = await getDownloadURL(archRef)
    //console.log(urlFile)
    await setFile(urlFile)
  };

  const styleActive = {
     
  }  


  return (
    <div>
      <IconButton onClick={handleOpen} style={{marginTop: '14px', marginLeft: '4px', marginBottom: '2px' }}>
        <AddPhotoAlternateIcon sx={{ fontSize: 30 }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography sx={{marginBottom:"7%", marginTop: "5%" }}>Carga una imagen o un archivo .pdf</Typography>
        <Form.Control
              type='file'
              name="file"
              placeholder='ad file'
              onChange={handleFile}
              style={{ color: "gray", paddingBottom: "7%", display: "block", margin: "auto", marginBottom: "2%" }}
            />
          <button onClick={handleClose} style={{display: "block", margin: "auto", float: "right", borderStyle: "none", backgroundColor:"transparent", marginTop:"5px"}}>
            <AddPhotoAlternateIcon color="primary" sx={{fontSize: 35, boxShadow: '0px 5px 7px -7px',}}/>
          </button>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: '100%', marginTop: '10%', color: 'lightgray' }}
          >
            <small>&copy; CrossFt Ajusco</small>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
