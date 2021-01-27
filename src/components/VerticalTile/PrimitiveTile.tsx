import React from "react";
import { Overflow } from "../Overflow/Overflow";
import OverflowItem from "../Overflow/OverflowItem";
import "./verticaltile.scss";

interface IPrimitiveTile {
  imageSource: string;
}

export const PrimitiveTile = ({ imageSource }: IPrimitiveTile) => {
  return (
    <div className="primitive-tile">
      <img alt="foto" src={imageSource} className="image" />
      <Overflow dark className="component-overflow">
        <OverflowItem size="small">Menu Item</OverflowItem>
      </Overflow>
    </div>
  );
};

export default PrimitiveTile;
