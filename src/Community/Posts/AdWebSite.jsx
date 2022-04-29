import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddLinkIcon from '@mui/icons-material/AddLink';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "40%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export const AdWebSite = ({ setUrl }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const [link, setLink] = React.useState("");

const handleChange = (e) => {
    setLink(e.target.value)
    //console.log(e.target.name)
    //console.log(e.target.value)
    return link
};

return (
    <div>
    <IconButton onClick={handleOpen} style={{ marginTop: '17px', marginLeft: '20px' }}>
      <AddLinkIcon sx={{ fontSize: 30 }}/></IconButton>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
        <TextField fullWidth label="Agregar link" value={link} id="fullWidth" autoFocus name="link" type="text" placeholder="¡Agrega un link a tu post!" onChange={handleChange} sx={{ marginTop: "5%" }}/>
        <button style={{backgroundColor: "transparent", borderStyle: "none", float: "right", marginTop: "15px", borderRadius:"50%"}}><AddLinkIcon color="primary" sx={{ fontSize: 35, boxShadow: '0px 5px 7px -7px', marginRight: "10%" }} onClick={async() => { await setUrl(link); setLink(""); setOpen(false) }} /></button>
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
