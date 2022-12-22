//Formulario de registro de nuevos usuaris
//Se instaló npm formik "https://formik.org/docs/overview"
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import NuevoUsuario from "./NuevoUsuarioFB";
import './Register.css'

export const Register = (valores) => { // Props = valores : {objeto conformado por los initialValues y su valor}
  //[const, function]
  const [sendForm, changeSendForm] = useState(false); //useState inicia en false
  //const para definir la fecha de registro
  const fechaRegistro = new Date();
  let fecha2 = new Date(); //let que ayuda a calcular la próxima fecha de pago
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
  const dia = ('0' + fechaRegistro.getDate()).slice(-2);
  const mes = meses[fechaRegistro.getMonth()];// eleccion del mes en el arr "meses"
  const año = fechaRegistro.getFullYear();

  fecha2.setMonth(fecha2.getMonth() + 1); //se setea la fecha para agregarle los días 
  const dia2 = ('0' + fecha2.getDate()).slice(-2);
  const mes2 = (meses[fecha2.getMonth()]);
  
  const inscripcion = dia + " de " + mes + " del " + año; //fecha del día de inscripción
  const proxPago = dia2 + " de " + mes2 + " del " + fecha2.getFullYear() //fecha del próximo pago a partir del registro
  const nextPay = dia2 + "-" + mes2 + "-" + fecha2.getFullYear();
  // console.log(proxPago) //fecha con formato yyyy-MM-dd
  
  return (
    <>
      <Formik //Contenedor Formik, para el formulario (y funciones propias de Formik)
        enableReinitialize={true}
        //Declaración de las Keys iniciales con Value = ""
        initialValues={{
          birthday: "",
          email: "",
          date_start: new Date(),
          next_payday: new Date(Date.parse(nextPay)),
          payday: new Date(),
          payment_days: [new Date()],
          name: "",
          lastname: "",
          photo: "",
          phone: "",
          phone_contact: "",
          gender: "",
          heigth: "",
          weigth: "",
          neck: "",
          waist: "",
          hip: "",
          ill: "",
          kind_of_ill: "",
          injuries: "",
          kind_of_injuries: "",
          allergies: "",
          kind_of_allergies: "",
          excercise: "",
          frequency: "",
          kind_of_excercises: ""
        }}
        //Validación de el prop "valores" /valores esperados/ vs valores.ingresados
        validate={(valores) => {
          // console.log(valores); //Muestra el objeto del registro
          let errores = {}; //Auxiliar en los anuncios de error en la sintaxis ingresada (UI)
          //Se valora la información ingresada mediante if-else, equivale a "required"
          if (!valores.email) { //Validación para el mail
            errores.email = "Ingresa un email"; //Si no hay valores ingresados aparece mensaje
            //else if (una expresión regular vs[test] los valores ingresados)
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
            errores.email = "El correo sólo puede contener letras, números, puntos, guiones y guión bajo"; //Si no se cumple con los valores para email válidos aparece mensaje.
          }

          if (!valores.name) { //Validación para el nombre
            errores.name = "Ingresa un nombre";
          } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.name)) {
            errores.name = "El nombre sólo puede contener letras y espacios";
          }

          if (!valores.lastname) { //Validación para el apellido
            errores.lastname = "Ingresa al menos un apellido";
          } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.lastname)) {
            errores.lastname =
              "El apellido sólo puede contener letras y espacios";
          }
          if (!valores.birthday) { //validación de la fecha de cumpleaños
            errores.birthday = "Ingresa fecha de nacimiento"
          }

          if (!valores.phone) { //Validación para el número telefónico ingresado
            errores.phone = "Ingresa un número telefónico móvil o local";
          } else if (/\D/.test(valores.phone)) {
            errores.phone = "Ingresa sólo números";
          }

          if (!valores.phone_contact) { //Validación para el teléfono de contacto
            errores.phone_contact =
              "Para caso de emergencias, por favor, ingresa número de teléfono de algún contacto";
          } else if (/\D/.test(valores.phone_contact)) {
            errores.phone_contact = "Ingresa sólo números";
          }

          if (!valores.gender) { //Validación para el sexo
            errores.gender =
              "Selecciona una opción"
          }

          if (!valores.heigth) { //Validación para estatura
            errores.heigth = 
                "Ingresa un valor"
          }

          if (!valores.weigth) { //Validación para peso
            errores.weigth = 
                "Ingresa un valor"
          }

          return errores;

        }}

        //Al dar click en el <btn>Registrar</btn> (y pasar los test) se activa.
        onSubmit={ (valores, { resetForm, values }) => { 
          const nuevoObjeto = valores
          NuevoUsuario(nuevoObjeto);
          changeSendForm(true); //si el "state" es true aparece 'Registro exitoso'
          resetForm();//resetForm Limpia el formulario una vez validado
          // console.log('send form');
          setTimeout(() => changeSendForm(false), 3000); //Tiempo para volver useState a false
        }}
      >
        
        {/* errors para mensajes \ values  para evaluar nuevos campos en el formulario*/}
        {({ errors, values, isSubmitting }) => (
          //Inicia formulario para el registro
          <>
              {/* {console.log(values)} */}
              {/* {error && <Alert message={error} />} */}
              <Form className="formulario" type= "row"> {/* <Form> imprime en el UI */}
              <h2 className="title">Registro de nuevos usuarios</h2>
                  <div className="fields">
                    <label htmlFor="payment_days" className="subtitles">Fecha de registro:</label>
                    <p className="subtitles">{inscripcion}</p>
                    <label htmlFor="next_payday" className="subtitles">Siguiente fecha de pago:</label>
                    <p className="subtitles">{ proxPago }</p>
                  </div>
                  <div className="fields">
                    <label htmlFor="email" className="subtitles">Email: </label>
                    {/* //componente del mensaje de error debajo del titulo*/}
                    <ErrorMessage name="email" className="input"
                      component={() =>
                        <div className="error">{errors.email}</div>}
                    />
                    {/* cada Field es el input de Formik */}
                    <Field type="mail" name="email" id="email" placeholder="ejemplo_123@mail.com" className="input"/>
                  </div>  
                  <div className="fields">
                    <label htmlFor="name" className="subtitles">Nombre:</label>
                    <ErrorMessage name="name"
                      component={() => <div className="error">{errors.name}</div>}
                    />
                    <Field type="text" name="name" id="name" placeholder="nombre(s)" className="input" />
                  </div>
                  <div className="fields">
                    <label htmlFor="lastname" className="subtitles">Apellido(s):</label>
                    <ErrorMessage name="lastname"
                      component={() => (
                        <div className="error">{errors.lastname}</div>)} />
                    <Field type="text" name="lastname" id="lastname" placeholder="apellido(s)" className="input"/>
                  </div>
                  <div className="fields">
                    <label htmlFor="birthday" className="subtitles" >Fecha de nacimiento:</label>
                    <ErrorMessage name="birthday"
                      component={() => (
                        <div className="error">{errors.birthday}</div>)} />
                    <Field type="date" name="birthday" id="birthday" placeholder="cumpleaños" className="input"/>
                  </div>
                  <div className="fields">
                    <label htmlFor="phone" className="subtitles">Teléfono:</label>
                    <ErrorMessage name="phone"
                      component={() => <div className="error">{errors.phone}</div>}
                    />
                    <Field type="tel" name="phone" id="phone" placeholder="teléfono móvil o local" className="input"/>
                  </div>
                  <div className="fields">
                    <label htmlFor="phone_contact" className="subtitles">Teléfono de contacto:</label>
                    <ErrorMessage name="phone_contact"
                      component={() => (
                        <div className="error">{errors.phone_contact}</div> )} />
                    <Field type="tel" name="phone_contact" id="phone_contact" placeholder="contacto móvil o local" className="input"/>
                  </div>
                  <div className="fields">
                    <div className="subtitles" id="radio-gender">Sexo:</div>
                    <ErrorMessage name="gender"
                      component={() => (
                        <div className="error">{errors.gender}</div> )} />
                      <label className="check">
                        <Field type="radio" name="gender" value="Femenino" />
                        Femenino
                      </label>
                      <label className="check">
                        <Field type="radio" name="gender" value="Masculino" />
                        Masculino
                    </label>
                  </div>
                  <div className="fields medida">
                    <label htmlFor="heigth" className="subtitles">Estatura:</label>
                    <ErrorMessage name="heigth"
                      component={() => (
                        <div className="error">{errors.heigth}</div> )}
                    />
                    <Field type="number" name="heigth" id="height" placeholder="metros" step={0.01} precision={0.02} min={0.5} max={2.5} className="inputNum"/>
                    <label htmlFor="weigth" className="subtitles">Peso:</label>
                    <ErrorMessage name="weigth"
                      component={() => (
                        <div className="error">{errors.weigth}</div> )}
                    />
                    <Field type="number" name="weigth" id="weigth" placeholder="kg" step={0.01} precision={2} min={10} max={180} className="inputNum"/>
                  </div>
                  <div className="fields medida">
                    <label htmlFor="neck" className="subtitles">Cuello:</label>
                    <Field type="number" name="neck" placeholder="cm" id="neck" step={0.1} precision={2} min={10} max={70} className="inputNum"/>
                    <label htmlFor="waist" className="subtitles">Cintura:</label>
                    <Field type="number" name="waist" id="waist" placeholder="cm" step={0.1} precision={2} min={20} max={200} className="inputNum"/>
                    {/* Solo para el caso de values.gender == "femenino" */}
                    <div>
                      {(values.gender === "Femenino" && <>
                        <label htmlFor="hip" className="subtitles">Cadera:</label>
                        <Field type="number" name="hip" id="hip" placeholder="cm" step={0.1} precision={2} min={20} max={200} className="inputNum"/></>)}          
                    </div>
                  </div>
                  <div className="fields">
                    <div className="subtitles" id="radio-ill">¿Padece alguna enfermedad?:</div>
                      <label className="check">      
                        <Field type="radio" name="ill" value="no" />
                        no
                      </label>
                      <label className="check">
                      <Field type="radio" name="ill" value="sí" />
                      sí
                    </label>
                    <div>{ 
                      (values.ill === "sí" && <>
                        <label className="subtitles" htmlFor="kind_of_ill">¿Qué enfermedades padece?</label><br />
                        <><Field as="textarea" name="kind_of_ill" id="kind_of_ill" className="explain" placeholder="Especifica las enfermedades que padece" /> </></>)}
                    </div>
                  </div>            
                  <div className="fields">
                    <div className="subtitles" id="radio-injuries">¿Padece alguna lesión?:</div>
                      <label className="check">
                        <Field type="radio" name="injuries" value="no" />
                        no
                      </label>
                      <label className="check">
                        <Field type="radio" name="injuries" value="sí" />
                        sí
                    </label>
                    <div>{
                      (values.injuries === "sí" &&
                        <><label htmlFor="kind_of_injuries" className="subtitles">¿Qué lesiones padece?</label><br /><>
                          <Field as="textarea" name="kind_of_injuries" id="kind_of_injuries" className="explain" placeholder="Especifica las lesiones que padece"/>
                        </></>)}
                    </div>
                  </div>
                  <div className="fields">
                    <div className="subtitles" id="radio-allergies">¿Padece alguna alergia?:</div>
                      <label className="check">
                        <Field type="radio" name="allergies" value="no" />
                        no
                      </label>
                      <label className="check">
                        <Field type="radio" name="allergies" value="sí" />
                        sí
                      </label>
                    <div>{
                      (values.allergies === "sí" &&
                        <><label htmlFor="kind_of_allergies" className="subtitles">Alergias:</label><br />
                          <Field as="textarea" name="kind_of_allergies" id="kind_of_allergies" className="explain" placeholder="Incluye medicamentos, alimentos, ambiente, etc." /></> )}
                    </div>
                  </div>
                  <div className="fields">
                    <div className="subtitles" id="radio-excercise">¿Realiza ejercicio cotidianamente?</div>
                      <label className="check">
                        <Field type="radio" name="excercise" value="no" />
                        no
                      </label>
                      <label className="check">
                        <Field type="radio" name="excercise" value="sí" />
                        sí
                    </label>
                    <div>{
                      (values.excercise === "sí" && 
                      <><label htmlFor="frequency" className="subtitles">
                          ¿Con qué frecuencia realiza ejercicio a la semana?
                        </label><br/><Field type="range" name="frequency" id="frequency" min={0} max={7} step={1} /></>)}
                    </div>
                  </div>
              <div><center>
                {/* Si todo sale bien aparece el anuncio de "succes" */}
                {sendForm && <p className="success">¡¡Registro exitoso!!</p>}
                {/* button submit sólo sí se cumplen los campos requeridos*/}
                <button className="send" type="submit" disabled={isSubmitting}> Registrar </button>
                </center></div>
            </Form>
          </>
        )}
        
      </Formik>
      
    </>
  );
};