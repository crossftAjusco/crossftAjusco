import { useAuth } from "../../Context/authContext";
import { useNavigate } from "react-router-dom";
import "./login.css";
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from "react-bootstrap";

export const Login = () => {
  const { login, loginWithGoogle, user } = useAuth();
  // const navigate = useNavigate();
  const navigate = useNavigate();
  
  const handleWithGoogleSignin = async (user) => {
    loginWithGoogle()
      .then((result) => {
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    //formulario para el registro
    <>
      <Button
        variant="warning"
        onClick={handleWithGoogleSignin}
        size="md"
        className="btnInicial"
      >
            Inicia sesión <GoogleIcon />
          </Button>
    </>
  );
};
