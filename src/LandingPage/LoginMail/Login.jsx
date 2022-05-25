/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { useAuth } from "../../Context/authContext";
import { Navigate, useNavigate } from "react-router-dom";
import { Alert } from "../Alerts/Alert";
import "./login.css";
import Logo from "../../assets/lp_imgs/Logo.jpg"
import GoogleIcon from '@mui/icons-material/Google';
import { Button, Form } from "react-bootstrap";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const Login = () => {
  //aparecen en blanco cada campo
  const [user1, setUser] = useState({
    email: "",
    password: "",
  });
  const [showEdit, setShowEdit] = useState(true);
  const { login, loginWithGoogle, resetPassword, user } = useAuth();
  // const navigate = useNavigate();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleChange = ({ target: { name, value } }) =>
    // console.log(e.target.name, e.target.value);
    //console.log(name, value)
    setUser({ ...user1, [name]: value });
  // console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user1.email, user1.password);
      //Si todo sale bien lo envía a la página en navigate
      //navigate('/admin')
    } catch (error) {
      //sino sale bien lanza un error
      // console.log(error.message);
      console.log(error.code);
      //personalización de los mensajes de error
      if (error.code === "auth/internal-error") {
        setError("Correo invalido") || setTimeout(() => setError(" "), 3000);
      } else if (error.code === "auth/invalid-email") {
        setError("Por favor, verifica que el correo ingresado sea correcto") || setTimeout(() => setError(" "), 3000);
      } else if (error.code === "auth/wrong-password") {
        setError("El usuario o la contraseña es invalida, vuelve a intentarlo") || setTimeout(() => setError(" "), 3000);
      } else if (error.code === "auth/too-many-requests") {
        setError("El acceso a esta cuenta ha sido temporalmente deshabilitado debido a muchos intentos fallidos de inicio de sesión. Puedes restaurarlo inmediatamente reestableciendo tu contraseña o puedes intentarlo más tarde...") ||
        setTimeout(() => setError(" "), 5000);
      } else if (error.code === "auth/user-not-found") {
        setError("Usuario no registrado") || setTimeout(() => setError(" "), 3000);
      } else {
        setError(error.message);
      }
    }
  };

  const handleWithGoogleSignin = async (user) => {
    loginWithGoogle()
      .then((result) => {
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleResetPassword = async () => {
    if (!user1.email) return setError("Por favor, ingresa un email.") || setTimeout(() => setError(" "), 3000);
    try {
      await resetPassword(user1.email);
      setError(
        "Hemos enviado un correo con el enlace para reestablecer tu contraseña :D"
      ) || setTimeout(() => setError(" "), 3000);
    } catch (error) {
      setError(error.message);
    }
  };
  // console.log(user)

  const handleClick = () => {
    setShowEdit(!showEdit);
  };


  return (
    //formulario para el registro
    <>
      <div className="register">
        <img src={Logo} alt="LogoOfficial" className="imagen" />
        <h2 className="titulo">Inicio de sesión</h2>
        {error && <Alert message={error} className="errorMess" />}
        <br />
        <center>
          <Button
            variant="warning"
            onClick={handleWithGoogleSignin}
            size="md"
            className="btnInicial"
          >
            Inicia sesión con Google <GoogleIcon />
          </Button>
        </center>
        <br />
        <br />
        <Button
          variant="warning"
          size="md"
          type="submit"
          onClick={handleClick}
          className="btnInicial"
            >
            Inicia sesión con Email  <MailOutlineIcon/>
          </Button>
        <Form.Group>
          {showEdit ? null : (<>
            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="email" className="tittle">Email:</label><br />
              <input
                type="email"
                name="email"
                placeholder="ejemplo_123@mail.com"
                onChange={handleChange}
              ></input>
              <br />
              <label htmlFor="password" className="tittle">Contraseña:</label><br />
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="Contraseña" />
              <br /><center>
              <button className="botn"> Entrar </button>
              </center>
              </form>
              <a href="#!" onClick={handleResetPassword} className="ancla">
                ¿Olvidaste tu contraseña?{" "}
              </a>
              </>
          )}
          </Form.Group>
      </div></>
  );
};
