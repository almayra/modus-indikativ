import React from "react";
import "./verticaltile.scss";
import PrimitiveTile from "./PrimitiveTile";
import BottomContent from "./BottomContent";

export const VerticalTile = () => {
  return (
    <div className="vertical-tile">
      <div className="upper-content">Aa</div>
      <PrimitiveTile />
      <BottomContent />
    </div>
  );
};
