// -------------------NabBar by Bootstrap, NavBar en landing page------------------
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { useAuth } from "../../Context/authContext";
import { useNavigate, NavLink, Link } from "react-router-dom";
import Logo from "../../assets/lp_imgs/LogoZero.png";
import "./NavBar.css";
import {
  Avatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Login } from "../LoginMail/Login";

export const Navigation = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //para mostrar el modal
  //const [modalShow, setModalShow] = useState(false);

  //cerrar sesión desde navBar
  const { user, logout, setAdmin, admin } = useAuth();
  // console.log(user);
  //const para la redirección del usuario
  const navigate = useNavigate();
  //una vez que cierra sesión se va navigate('direccón')

  const handleLogout = async () => {
    await logout();
    setAdmin(false);
    navigate("/");
  };

  const handleUser = () => {
    navigate("/UserView");
  };

  const handleAdmin = () => {
    navigate("/admin");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="contenido">
        <img src={Logo} alt="logo" className="icon" />
        <NavLink className="logoText" to="/">
          <b>Cross Ft. Ajusco</b>
        </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <center>
              <NavDropdown title="¿Quiénes somos?" id="collasible-nav-dropdown">
                <tr>
                  <Link className="underline" to="/acerca_de">
                    Acerca de
                  </Link>
                </tr>
                <tr>
                  <Link className="underline" to="/coach">
                    Coach
                  </Link>
                </tr>
                <tr>
                  <Link className="underline" to="/tarifas">
                    Tarifas
                  </Link>
                </tr>
                <tr>
                  <Link className="underline" to="/testimonios">
                    Testimonios
                  </Link>
                </tr>
              </NavDropdown>
            </center>
            {/* 
              <Nav.Link className="navtext" href="/crossftAjusco/recomendaciones_de_salud">
                Recomendaciones de salud
              </Nav.Link>
            */}
          </Nav>
          {/* Botones de inicio de sesión */}
          {user ? (
            <>
              <Box sx={{ flexGrow: 0 }} className="dropDownAvatar">
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.displayName} src={user.photoURL} />
                  </IconButton>
                </Tooltip>
                <p className="userName">{user.displayName || user.email}</p>
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
                  {admin ? (
                    <>
                      <ListItemButton onClick={handleAdmin}>
                        <ListItemIcon>
                          <AdminPanelSettingsIcon />
                          <ListItemText primary="Admin" />
                        </ListItemIcon>
                      </ListItemButton>
                      <ListItemButton onClick={handleLogout}>
                        <ListItemIcon>
                          <LogoutIcon />
                          <ListItemText primary="LogOut" />
                        </ListItemIcon>
                      </ListItemButton>
                    </>
                  ) : (
                    <>
                      <ListItemButton onClick={handleUser}>
                        <ListItemIcon>
                          <AccountCircleIcon />
                          <ListItemText primary="Usuario" />
                        </ListItemIcon>
                      </ListItemButton>
                      <ListItemButton onClick={handleLogout}>
                        <ListItemIcon>
                          <LogoutIcon />
                          <ListItemText primary="LogOut" />
                        </ListItemIcon>
                      </ListItemButton>
                    </>
                  )}
                </Menu>
              </Box>
            </>
          ) : (
            <center>
              <Login />
            </center>
          )}
          <Nav>{/* <Nav.Link href="#deets">More deets</Nav.Link> */}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
