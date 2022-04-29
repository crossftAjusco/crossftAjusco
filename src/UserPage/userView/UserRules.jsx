import * as React from "react";
import { useAuth } from "../../Context/authContext";
import "./UserView.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ScrollableFeed from 'react-scrollable-feed'
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from "react";
import Reglamento from "../../assets/pdf/Reglamento.pdf"

export const UserRules = () => {
  // Se declara una variable para guardar el id del usuario para
  const { user, users } = useAuth();
  console.log(user.email)
  //console.log(users[0])
  pdfjs.GlobalWorkerOptions.workerSrc = 
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  
  /*To Prevent right click on screen*/
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
    
  /*When document gets loaded successfully*/
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  
  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }
  
  function previousPage() {
    changePage(-1);
  }
  
  function nextPage() {
    changePage(1);
  }
  

  const userData = users.filter( (us) => {
    if (us.email === user.email) return true
  })
  console.log(userData[0])

  //configuración de los hoocks para
  const uD = userData[0]

  //Función para actualizar datos 


  return (
    
      <>
    <h2 id="title">REGLAMENTO DE USUARIO</h2>
    <Box sx={{ display: "flex" }}>
        
         
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={16} md={8} lg={10}>
              <Paper
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: 935,
                  }}
                >
      
        

    <div className="main">
      <Document
        file={Reglamento}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <div className="pagec">
          Página {pageNumber || (numPages ? 1 : '--')} de {numPages || '--'}
        </div>
        <div className="buttonc">
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          className="Pre"
            
        >
          Anterior
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
           
        >
          Siguiente
        </button>
        </div>
      </div>
      </div>
      </Paper>
      </Grid>
      <Grid item xs={16} md={8} lg={10}>
      <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 635,
                  }}
                >
      
        
      

        <h3>{uD.name} {uD.last_name}</h3> 
        <h4>Este es mi reglamento de usuario:</h4>
        <ScrollableFeed>
        <div key={uD.id}>
        
          <p>
          Al momento de pertenecer a la comunidad de 'Cross FT Ajusco' hago constatar que he leído y entendido las normas presentadas en el 'Reglamento Interno de Cross FT Ajusco', por lo que acepto de conformidad cumplir con lo establecido en el mismo, así como con las instrucciones e indicaciones que emitan los instructores y/o monitores acargo. 

Así mismo, acepto las responsabilidades, derechos y obligaciones establecidos para las y los participantes de las actividades de 'Cross FT Ajusco' en la normatividad interna y externa que rige a la Institución.


Indicaciones 
higiénicas y de salud
• Por ser un espacio semi abierto,  y apegados a una recomendación de la OMS respecto al uso de cubrebocas y en las actividades deportivas, el uso de este queda a elección personal 
• Notifica al entrenador lesiones o molestias 
• El uso de gel desinfectante así como la sanitizacion del equipo es obligatoria 
• Trae una toalla pequeña 
• Usa desodorante
• Ten buenos hábitos de higiene 

Remembranza 
Eduardo Romero Flores 
Desde pequeño adquirí 2 pasiones que nunca he dejado: el deporte y la lectura. En la escuela primaria tuve contacto con el atletismo donde nació y aún pervive mi gusto por correr. Un tiempo apasionado del gimnasio, desde siempre de los espacios abiertos, el deporte siempre ha sido parte de mi vida. Escalar, alpinismo,  senderismo,  correr en montañas,  el entrenamiento funcional así como un poco de artes marciales han marcado mi formación.  Y el gusto por el conocimiento; de vital importancia en la práctica deportiva ya sea esta recreativa, amateur o profesional.
Cuento con 2 certificados: como Entrenador deportivo especializado  en 'Entrenamiento Funcional', así como Entrenador en 'Acondicionamiento Físico'; así como múltiples constancias de asistencia a talleres y cursos afines.
            </p>   
                </div> 
                </ScrollableFeed>  
                
                </Paper>
              </Grid>   
            </Grid>
          </Container>
        </Box>  
                  
    </>
  )}; 


