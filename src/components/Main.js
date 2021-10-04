import React from "react";
import Tile from "./Tile";

export default function Main(props) {
  return (
    <main>
      <h1>{props.pageName}</h1>
      <div className="tileCont">
        {props.info.map((i) => {
          return <Tile info={i} />;
        })}
      </div>
    </main>
  );
}
