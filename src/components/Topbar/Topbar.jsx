import React from "react";
import "./topbar.scss";
import { Settings, List } from "@mui/icons-material/";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrap">
        <div className="topbarLeft">
          <Link to='/' className="link">
          <div className="logo">
            HAMMER <span className="logo_red">SYSTEMS</span>
          </div>
          </Link>
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
