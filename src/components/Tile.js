import React from "react";

export default function Tile({ info }) {
  return (
    <div className="tile">
      <span>{info.icon}</span>
      <div>
        <p>{info.name}</p>
        <p className="tile_desc">{info.desc}</p>
      </div>
    </div>
  );
}
