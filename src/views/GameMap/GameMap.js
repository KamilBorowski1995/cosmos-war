import { useEffect, useReducer } from "react";

import { initialState, reducer } from "store/store";

import Plane from "components/Plane";
import Bullet from "components/Bullet";
import Rock from "components/Rock";

import "./GameMap.css";

const GameMap = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Player = {
    xMove: "none",
    shoot: false,
  };

  function drawFn() {
    if (Player.xMove === "right") {
      dispatch({ type: "MOVE_RIGHT" });
    }
    if (Player.xMove === "left") {
      dispatch({ type: "MOVE_LEFT" });
    }
    dispatch({ type: "MOVE_ROCK" });
    dispatch({ type: "MOVE_BULLET" });
    dispatch({ type: "DESTRUCTION_ROCK" });
  }

  function newRock() {
    dispatch({ type: "NEW_ROCK" });
  }

  function movePlane() {
    window.addEventListener("keydown", (e) => {
      const key = e.keyCode;

      switch (key) {
        case 37:
          Player.xMove = "left";
          break;

        case 39:
          Player.xMove = "right";
          break;
        case 32:
          if (Player.shoot !== true) {
            Player.shoot = true;
            dispatch({ type: "NEW_BULLET" });
          }
          break;
        default:
          break;
      }
    });

    window.addEventListener("keyup", (e) => {
      const key = e.keyCode;
      switch (key) {
        case 37:
          Player.xMove = "none";
          break;

        case 39:
          Player.xMove = "none";
          break;
        case 32:
          Player.shoot = false;

          break;

        default:
          break;
      }
    });
  }

  useEffect(() => {
    movePlane();
    function setSizeWindow() {
      const windowsSizeX = window.innerWidth;
      const windowsSizeY = window.innerHeight;

      dispatch({
        type: "SET_WINDOW_SIZE",
        sizeX: windowsSizeX,
        sizeY: windowsSizeY,
      });
    }
    setSizeWindow();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setInterval(drawFn, 1000 / 60);
    setInterval(newRock, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const MapBullet = state.Bullet.map(({ id, posX, posY }) => {
    return <Bullet key={id} id={id} posX={posX} posY={posY} />;
  });

  const MapRock = state.Rock.map(({ id, posX, posY }) => {
    return <Rock key={id} id={id} posX={posX} posY={posY} />;
  });

  return (
    <div className="map">
      <Plane positionX={state.PlayerX} />

      {state.Bullet.length > 0 && MapBullet}
      {state.Rock.length > 0 && MapRock}
    </div>
  );
};

export default GameMap;
