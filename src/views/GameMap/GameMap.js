import { useState, useEffect, useReducer } from "react";

import { initialState, reducer } from "store/store";

import Plane from "components/Plane";
import Bullet from "components/Bullet";
import Rock from "components/Rock";

import "./GameMap.css";

const GameMap = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Player = {
    xMove: "none",
  };

  function move() {
    if (Player.xMove === "right") {
      dispatch({ type: "MOVE_RIGHT" });
    }
    if (Player.xMove === "left") {
      dispatch({ type: "MOVE_LEFT" });
    }
    dispatch({ type: "MOVE_ROCK" });
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

        default:
          break;
      }
    });
  }

  useEffect(() => {
    movePlane();

    // const intervalMove = setInterval(move, 1000 / 60);
  }, []);

  useEffect(() => {
    // move();

    const intervalMove = setInterval(move, 1000 / 60);
  }, []);

  return (
    <div className="map">
      <Plane positionX={state.PlayerX} />
      {/* <Bullet  /> */}
      <Rock pos={state.RockY} />
    </div>
  );
};

export default GameMap;
