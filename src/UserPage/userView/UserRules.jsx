import * as React from "react";
import { useAuth } from "../../Context/authContext";
import "./UserView.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Reglamento from "../../assets/pdf/Reglamento.pdf";
import IconButton from "@mui/material/IconButton";
import FileOpenIcon from "@mui/icons-material/FileOpen";

export const UserRules = () => {
  //Se configura el hoock para traer los datos de los usuarios desde AutContext
  const { user, users } = useAuth();
  console.log(user.email);
  //console.log(users[0])
  const style = {
    display: "block",
    margin: "auto",
    width: "100%",
    height: "100%",
  };

  /*To Prevent right click on screen*/
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  const userData = users.filter((us) => {
    //Comparamos el email de usuario logueado y el del usurio filtrado
    if (us.email === user.email) return true;
  });
  console.log(userData[0]);
  //traemos los datos del usuario pasando a una nueva variable
  const uD = userData[0];
  //Retornamos el rendereado de los elementos del reglamento
  return (
    <>
      <div className="title3">
        <h2>Reglamento de usuario</h2>
      </div>
      <Box sx={{ display: "flex" }}>
        <Container maxWidth="lg">
          <Paper
            sx={{
              p: 1,
              display: "flex",
              flexDirection: "column",
              height: 535,
            }}
          >
            <div className="p1">
              <p>
                Este es tu reglamento de usuario, es tu deber conocer las normas
                dentro de la comunidad, puedes descargarlo en formato pdf y
                leerlo cuando desees.
              </p>
              <a target="_blanck" href={Reglamento}>
                <IconButton color="success">
                  Abrir Documento
                  <FileOpenIcon fontSize="large"></FileOpenIcon>
                </IconButton>
              </a>
            </div>
            <object data={Reglamento} style={style} label="pdf"></object>
          </Paper>

          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 435,
            }}
          >
            <h3>
              {uD.name} {uD.last_name}
            </h3>
            <h4>Este es tu reglamento de usuario:</h4>
            <div key={uD.id}>
              <p>
                Al momento de pertenecer a la comunidad de 'Cross FT Ajusco'
                hago constatar que he leído y entendido las normas presentadas
                en el 'Reglamento Interno de Cross FT Ajusco', por lo que acepto
                de conformidad cumplir con lo establecido en el mismo, así como
                con las instrucciones e indicaciones que emitan los instructores
                y/o monitores acargo. Así mismo, acepto las responsabilidades,
                derechos y obligaciones establecidos para las y los
                participantes de las actividades de 'Cross FT Ajusco' en la
                normatividad interna y externa que rige a la Institución.
              </p>
              <th>Indicaciones Higiénicas y de Salud</th>
              <tr>
                • Por ser un espacio semi abierto, y apegados a una
                recomendación de la OMS respecto al uso de cubrebocas y en las
                actividades deportivas, el uso de este queda a elección personal
              </tr>
              <tr>• Notifica al entrenador lesiones o molestias</tr>
              <tr>
                • El uso de gel desinfectante así como la sanitizacion del
                equipo es obligatoria{" "}
              </tr>
              <tr>• Trae una toalla pequeña </tr>
              <tr>• Usa desodorante</tr>
              <tr>• Ten buenos hábitos de higiene</tr>
            </div>
          </Paper>
        </Container>
      </Box>
    </>
  );
};
