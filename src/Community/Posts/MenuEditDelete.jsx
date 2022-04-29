import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Edit } from './Edit';
import { Delete } from './Delete';

export const MenuEditDelete = ({ id, setPosts, avatar }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box>
        <MoreVertIcon type="button" onClick={handleClick} />
        {open ? (
          <Paper
            sx={{
              position: 'absolute',
            }}
          >
            <MenuList
              style={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FFF',
                border: '0.5px solid #D3D3D3',
                boxShadow: '0px 5px 7px -7px',
                marginLeft: '-45px',
                borderRadius: '5px',
                marginTop: '0px',
                width: '50px',
                paddingRight: '2px',
                paddingLeft: "2px",
              }}
            >
              <IconButton>
                <Edit
                  id={id}
                  setPosts={setPosts}
                  avatar={avatar}
                  fontSize="small"
                  style={{ display: 'absolute', margin:"auto" }}
                  closeMenu={handleClickAway}
                />
              </IconButton>
              <IconButton>
                <Delete
                  id={id}
                  setPosts={setPosts}
                  avatar={avatar}
                  fontSize="small"
                  style={{ display: 'absolute', margin: 'auto' }}
                />
              </IconButton>
            </MenuList>
          </Paper>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};