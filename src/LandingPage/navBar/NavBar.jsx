// -------------------NabBar by Bootstrap, NavBar en landing page------------------
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

export const Navigation = () => {
  //para mostrar el modal
  //const [modalShow, setModalShow] = useState(false);

  //cerrar sesión desde navBar
  const { user, logout } = useAuth();
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
          {user ? (<>
            <div className="user">
              <img src={user.photoURL} alt="Perfil" />s
              <p>{user.displayName || user.email}</p>
            </div>
            <div>
              <button onClick={handleLogout} className="login">
                Cerrar Sesión
              </button>
            </div>
            </>) : (
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
