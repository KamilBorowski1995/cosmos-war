import { useState, useEffect } from "react";

import BulletSvg from "assets/bullet.svg";

import "./Bullet.css";

const Bullet = (props) => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    setPosX(props.posX);
    setPosY(props.posY);
  }, [props]);

  const Style = {
    left: posX,
    bottom: posY,
  };
  return (
    <img
      className="Bullet"
      style={Style}
      src={BulletSvg}
      alt="Icon made by Good Ware from www.flaticon.com"
    />
  );
};

export default Bullet;
