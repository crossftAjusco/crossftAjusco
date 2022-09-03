import { useAuth } from "../Context/authContext";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

// Garantiza la proteccion de la ruta para que nadie que no esté logueado lo vea
export const ProtectedRoute = ({ children }) => {
  const { user, loading, users, setAdmin, admin } = useAuth();

  useEffect(() => {
    try {
      localStorage.setItem("admin", admin);
    } catch (error) {
      localStorage.removeItem("admin");
      console.log(error);
    }
  }, [admin]);

  if (loading) return <h2>Cargando...</h2>;
  if (!user) return <Navigate to="/" />;
  const mails = users.map((elem) => {
    return elem.email;
  });

  if (
    (user.email === "crossftajuscoweb@gmail.com") |
    (user.email === "axoscoyetizote@gmail.com") |
    (user.email ==="antonio281255@gmail.com")
  ) {
    setAdmin(true);
    return <>{children}</>;
  }
  if (mails.indexOf(user.email) !== -1) return <Navigate to="/UserView" />;
  return <Navigate to="/" />;
};
