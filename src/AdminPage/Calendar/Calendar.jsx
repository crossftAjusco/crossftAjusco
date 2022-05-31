import "./calendar.css";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  getFirestore,
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import ModalCal from "./ModalCal";
require("moment/locale/es-mx");
const localizer = momentLocalizer(moment);

const Calendario = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [modalUserInfo, setModalUserInfo] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleClick = (e) => {
    const user = users.filter((u) => {
      if (e.id === u.id) return true;
    });
    setModalUserInfo({
      title: user[0].title,
      lastName: user[0].lastName,
      strPayday: user[0].start.toLocaleDateString("es-MX", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      strNext_payday: user[0].nextPayDay.toLocaleDateString("es-MX", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      nextPayday: user[0].nextPayDay,
      payday: user[0].start,
      id: user[0].id,
    });
    handleShow();
  };

  const eventPropGetter = (event, start, end, isSelected) => {
    let newStyle = {
      background: "grey",
      color: "white",
    };
    if (event.paid) {
      newStyle.backgroundColor = "green";
    }
    if (event.late) {
      newStyle.backgroundColor = "red";
    }
    return {
      className: "",
      style: newStyle,
    };
  };

  useEffect(() => {
    //mounts
    const q = query(collection(db, "Users"));
    const unsub = onSnapshot(q, (snap) => {
      const array = snap.docs.map((doc) => {
        return {
          id: doc.id,
          title: doc.get("name"),
          lastName: doc.get("lastname"),
          start: doc.get("payday").toDate(),
          nextPayDay: doc.get("next_payday").toDate(),
          end: doc.get("payday").toDate(),
          allDay: true,
          paid: true,
        };
      });
      const payDays = snap.docs.map((doc) => {
        let late = true;
        if (new Date().getTime() < doc.get("next_payday").toDate().getTime())
          late = false;
        return {
          id: doc.id,
          title: doc.get("name"),
          lastName: doc.get("last_name"),
          start: doc.get("next_payday").toDate(),
          end: doc.get("next_payday").toDate(),
          allDay: true,
          paid: false,
          late,
        };
      });
      const allDays = array.concat(payDays);
      setUsers([...array]);
      setData([...allDays]);
    });
    //unmounts
    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      <h1 className="title">Calendario de pagos</h1>
      <Calendar
        localizer={localizer}
        events={data}
        style={{ height: "80vh", margin: "0" }}
        onSelectEvent={handleClick}
        selectable
        eventPropGetter={eventPropGetter}
        className="calendario"
      />
      <ModalCal show={show} setShow={setShow} modalUserInfo={modalUserInfo} />
    </>
  );
};

export default Calendario;
