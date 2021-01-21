import React from "react";
import EMPOFARM from "../../assets/images/empofarm.png";
import ODOO from "../../assets/images/odoo.png";
import AVATAR from "../../assets/images/avatar.png";
import { Select } from "../Select/Select";
import "./topbar.scss";
import Metadata from "../Typography/Metadata";
import { Help16, Notification16, Power16 } from "@carbon/icons-react";
import { Depth } from "../Depth/Depth";

export const TopBar = () => {
  return (
    <Depth depth="16">
      <div className="navbar-container">
        <div className="head">
          <img className="logo" src={EMPOFARM} alt="empofarm" height={32} />
          <img className="logo" src={ODOO} alt="odoo" height={24} />
          <div className="divider" />
          <Select
            containerStyle={{ width: 100, backgroundColor: "#fff" }}
            className="select"
            type="inline-select"
          >
            <option>User Role</option>
          </Select>
        </div>
        <div className="tail">
          <Help16 />
          <div className="divider" />
          <Notification16 />
          <div className="divider" />
          <Power16 className="icon" />
          <div className="profile">
            <Metadata className="text" variant="02">
              Admin
            </Metadata>
            <div className="divider" />
            <Metadata className="text" variant="02">
              Mahar Santara
            </Metadata>
            <img
              src={AVATAR}
              height={33}
              alt="avatar"
              style={{ borderRadius: 20 }}
            />
          </div>
        </div>
      </div>
    </Depth>
  );
};
