import React from "react";
import Heading from "../Typography/Heading";
import BodyLong from "../Typography/BodyLong";
import { Badge } from "../Badge/Badge";
import "./verticaltile.scss";

interface ICardSection {
  labelTitle: string;
  supportingLabel: string;
}

export const CardSection = ({ labelTitle, supportingLabel }: ICardSection) => {
  return (
    <div className="card-section">
      <Heading variant="03">{labelTitle}</Heading>
      <BodyLong variant="01">{supportingLabel}</BodyLong>
      <div className="badge-container">
        <Badge className="badge" color="light-gray" inputLabel="Label" />
        <Badge className="badge" color="light-gray" inputLabel="Label" />
        <Badge className="badge" color="light-gray" inputLabel="Label" />
        <Badge className="badge" color="light-gray" inputLabel="Label" />
      </div>
    </div>
  );
};

export default CardSection;
