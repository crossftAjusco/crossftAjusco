import * as React from "react";
import { useState } from "react";

import "./Biopic.css";
import diplom1 from "../../assets/lp_imgs/dip1V.jpeg";
import diplom2 from "../../assets/lp_imgs/dip2H.jpeg";
import diplom3 from "../../assets/lp_imgs/dip3V.jpeg";
import diplom4 from "../../assets/lp_imgs/dip4H.jpeg";
import diplom5 from "../../assets/lp_imgs/dip5V.jpeg";

const Biopic = () => {
  let data = [
    {
      id: 1,
      imgSrc: diplom1,
    },
    {
      id: 2,
      imgSrc: diplom2,
    },
    {
      id: 3,
      imgSrc: diplom3,
    },
    {
      id: 4,
      imgSrc: diplom4,
    },
    {
      id: 5,
      imgSrc: diplom5,
    },
  ];
  const [model, setModel] = useState(false);
  /*const [tempImgSrc, setTempImgSrc] */
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
    console.warn(imgSrc);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}></div>
      <div className="biopic">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
      {console.warn(data)}
    </>
  );
};
export default Biopic;
