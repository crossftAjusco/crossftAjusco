import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Biopic.css";
import diplom1 from "../../assets/lp_imgs/dip1V.jpeg";
import diplom2 from "../../assets/lp_imgs/dip2H.jpeg";
import diplom3 from "../../assets/lp_imgs/dip3V.jpeg";
import diplom4 from "../../assets/lp_imgs/dip4H.jpeg";
import diplom5 from "../../assets/lp_imgs/dip5V.jpeg";
import bio from "../../assets/lp_imgs/Eduardo Romero Flores.png";

const Biopic = () => {
  let data = [
    {
      id: 1,
      imgSrc: bio,
    },
    {
      id: 2,
      imgSrc: diplom2,
    },
    {
      id: 3,
      imgSrc: diplom1,
    },
    {
      id: 4,
      imgSrc: diplom3,
    },
    {
      id: 5,
      imgSrc: diplom4,
    },
    {
      id: 6,
      imgSrc: diplom5,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(false);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(true)} />
      </div>
      <div className="biopic">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
              <CloseIcon onClick={() => setModel(false)} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Biopic;
