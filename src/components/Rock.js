import { useState, useEffect } from "react";

import RockSvg from "assets/rock.svg";
import "./Rock.css";

const Rock = ({ pos }) => {
  const [y, setY] = useState(pos);

  useEffect(() => {
    setY(pos);
  }, [pos]);

  const position = {
    top: y,
  };

  return (
    <img
      className="rock"
      style={position}
      src={RockSvg}
      alt="Icon made by DinosoftLabs from www.flaticon.com"
    />
  );
};

export default Rock;
