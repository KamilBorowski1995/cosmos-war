import { useState, useEffect } from "react";

import RockSvg from "assets/rock.svg";
import "./Rock.css";

const Rock = (props) => {
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
      className="rock"
      style={Style}
      src={RockSvg}
      alt="Icon made by DinosoftLabs from www.flaticon.com"
    />
  );
};

export default Rock;
