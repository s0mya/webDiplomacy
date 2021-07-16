import React from "react";
import { default as MyImage } from "../assets/wDmap-v5.svg";

interface Props {}

const GameMap = (props: Props) => {
  return (
    <img
      src={MyImage}
      alt="Diplomacy Map"
      className="GameMap rounded-lg border border-dark"
    />
  );
};

export default GameMap;
