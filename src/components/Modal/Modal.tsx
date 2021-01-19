import React from "react";
import BodyShort from "../Typography/BodyShort";
import Heading from "../Typography/Heading";
import { Button } from "../Button/Button";
import { Depth } from "../Depth/Depth";
import "./modal.scss";

interface IModal {
  size: "wide" | "xlarge" | "large" | "medium" | "narrow";
  modalHead: string;
  modalBody: string;
}

export const Modal = ({ size, modalBody, modalHead }: IModal) => {
  return (
    <Depth depth="64">
      <div className={`modal-container ${size}`}>
        <Heading variant="02" className="modal-head">
          {modalHead}
        </Heading>
        <BodyShort variant="01" className="modal-body">
          {modalBody}
        </BodyShort>
        <div>
          <Button containerStyle={{ width: "50%" }} theme="primary">
            Primary
          </Button>
          <Button
            containerStyle={{ marginLeft: "-1px", width: "50%" }}
            theme="secondary"
          >
            Secondary
          </Button>
        </div>
      </div>
    </Depth>
  );
};
