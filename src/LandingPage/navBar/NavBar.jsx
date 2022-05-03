// -------------------NabBar by Bootstrap, NavBar en landing page------------------
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  NavLink,
} from "react-bootstrap";
import { useAuth } from "../../Context/authContext";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/lp_imgs/Logo.jpg";
import "./NavBar.css";
import {
  Avatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export const Navigation = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //para mostrar el modal
  //const [modalShow, setModalShow] = useState(false);

  //cerrar sesión desde navBar
  const { user, logout } = useAuth();
  console.log(user);
  // console.log(user)
  //const para la redirección del usuario
  const navigate = useNavigate();
  //una vez que cierra sesión se va navigate('direccón')

  const handleLogin = () => {
    navigate("crossfit_ajusco/login");
  };

  const handleLogout = async () => {
    await logout();
    navigate("crossfit_ajusco/home");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="contenido">
        <img src={Logo} alt="logo" className="icon" />
        <Nav.Link className="logoText" href="/">
          <b>Cross Ft. Ajusco</b>
        </Nav.Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="¿Quiénes somos?" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/crossfit_ajusco/acerca_de">
                Acerca de
              </NavDropdown.Item>
              <NavDropdown.Item href="/crossfit_ajusco/coach">
                Coach
              </NavDropdown.Item>
              <NavDropdown.Item href="/crossfit_ajusco/precios">
                Precio
              </NavDropdown.Item>

              <NavDropdown.Divider />
            </NavDropdown>
            {/* 
              <Nav.Link className="navtext" href="/crossfit_ajusco/recomendaciones_de_salud">
                Recomendaciones de salud
              </Nav.Link>
            */}
          </Nav>
          {/* Botones de inicio de sesión */}
          {user ? (
            <>
              <div>
                <button onClick={handleLogout} className="login">
                  Cerrar Sesión
                </button>
              </div>

              <Box sx={{ flexGrow: 0 }} className="dropDownAvatar">
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={user.photoURL} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">LogOut</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Calendar</Typography>
                  </MenuItem>
                  <ListItemButton onClick={handleLogout}>
                    <ListItemIcon>
                      <AutoStoriesIcon />
                      <ListItemText primary="Reglamento" />
                    </ListItemIcon>
                  </ListItemButton>
                </Menu>
                <p className="userName">{user.displayName || user.email}</p>
              </Box>

              <div className="user">
                <Avatar src={user.photoURL} />
                <p className="userName">{user.displayName || user.email}</p>
              </div>
            </>
          ) : (
            <button onClick={handleLogin} className="login">
              Iniciar Sesión
            </button>
          )}

          <Nav>{/* <Nav.Link href="#deets">More deets</Nav.Link> */}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
