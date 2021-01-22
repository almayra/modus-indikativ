import React from "react";
import "./sidebar.scss";
import { Document16 } from "@carbon/icons-react";
import BodyLong from "../Typography/BodyLong";
import Metadata from "../Typography/Metadata";

export const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <div className="icon-wrapper">
            <Document16 className="icon" />
            <BodyLong variant="01">Sub-Menu 1</BodyLong>
          </div>
          <ul>
            <li className="active">
              Sub Menu Label
              <div className="counter-badge">
                <Metadata className="text-counter" variant="01">
                  99
                </Metadata>
              </div>
            </li>
            <li>Sub Menu Label</li>
            <li>Sub Menu Label</li>
          </ul>
        </li>
        <li>
          <div className="icon-wrapper">
            <Document16 className="icon" />
            <BodyLong variant="01">Sub-Menu 2</BodyLong>
          </div>
        </li>
        <li>
          <div className="icon-wrapper">
            <Document16 className="icon" />
            <BodyLong variant="01">Sub-Menu 3</BodyLong>
          </div>
        </li>
        <li>
          <div className="icon-wrapper">
            <Document16 className="icon" />
            <BodyLong variant="01">Sub-Menu 4</BodyLong>
          </div>
        </li>
        <li>
          <div className="icon-wrapper">
            <Document16 className="icon" />
            <BodyLong variant="01">Sub-Menu 5</BodyLong>
          </div>
        </li>
        <li>
          <div className="icon-wrapper">
            <Document16 className="icon" />
            <BodyLong variant="01">Sub-Menu 6</BodyLong>
          </div>
        </li>
        <li>
          <div className="icon-wrapper">
            <Document16 className="icon" />
            <BodyLong variant="01">Sub-Menu 7</BodyLong>
          </div>
        </li>
      </ul>
    </nav>
  );
};
