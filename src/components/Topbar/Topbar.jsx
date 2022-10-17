import React from "react";
import "./topbar.scss";
import { Settings, List } from "@mui/icons-material/";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrap">
        <div className="topbarLeft">
          <div className="logo">
            HAMMER <span className="logo_red">SYSTEMS</span>
          </div>
          <div className="topbarIconContainer">
            <List />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}
