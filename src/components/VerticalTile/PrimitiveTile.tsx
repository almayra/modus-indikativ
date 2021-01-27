import React from "react";
import IMG from "../../assets/images/1_1.png";
import { Overflow } from "../Overflow/Overflow";
import OverflowItem from "../Overflow/OverflowItem";
import "./verticaltile.scss";

export const PrimitiveTile = () => {
  return (
    <div className="primitive-tile">
      <img alt="foto" src={IMG} className="image" />
      <Overflow dark className="component-overflow">
        <OverflowItem size="small">Menu Item</OverflowItem>
      </Overflow>
    </div>
  );
};

export default PrimitiveTile;
