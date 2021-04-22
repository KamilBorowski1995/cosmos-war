import { useState, useEffect } from "react";
import PlaneSvg from "assets/airplane.svg";

import "./Plane.css";

const Plane = ({ positionX }) => {
  const [x, setX] = useState(positionX);

  useEffect(() => {
    setX(positionX);
  }, [positionX]);

  const position = {
    left: x,
  };

  return (
    <img
      style={position}
      className="SVGElement plane"
      src={PlaneSvg}
      alt="Icon made by Freepik from www.flaticon.com"
    />
  );
};

export default Plane;
