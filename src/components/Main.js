import React from "react";
import Tile from "./Tile";

export default function Main(props) {
  return (
    <main>
      <h1>{props.pageName}</h1>
      {props.info.map((i) => {
        return <Tile info={i} />;
      })}
    </main>
  );
}
