import React from "react";
import "./verticaltile.scss";
import PrimitiveTile from "./PrimitiveTile";
import BottomContent from "./BottomContent";
import UpperContent from "./UpperContent";
import CardSection from "./CardSection";

interface IVerticalTile {
  supportingText: string;
  textLayer: string;
  imageSource: string;
  label: string;
  labelTitle: string;
}

export const VerticalTile = ({
  supportingText,
  label,
  textLayer,
  imageSource,
  labelTitle,
}: IVerticalTile) => {
  return (
    <div className="vertical-tile">
      {label ? <UpperContent label={label} /> : null}
      <PrimitiveTile imageSource={imageSource} />
      {supportingText ? (
        <BottomContent supportingText={supportingText} textLayer={textLayer} />
      ) : null}
      {labelTitle ? (
        <CardSection labelTitle={labelTitle} supportingLabel="Card Section" />
      ) : null}
    </div>
  );
};
