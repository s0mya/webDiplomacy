import React from "react";
import "./CountryTile.css";

interface Props {
  country: string;
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const CountryTile = ({ country }: Props) => {
  return (
    <div className="CountryTile d-inline-flex align-items-center mt-4 mr-3">
      <div className={"mr-2 icon-country icon-country-" + country}></div>
      <span className="label">{capitalizeFirstLetter(country)}</span>
    </div>
  );
};

export default CountryTile;
