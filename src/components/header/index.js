import React from "react";

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

import NotificationsIcon from "@mui/icons-material/Notifications";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./index.css";

export default function Header() {
  return (
    <div className="header-container">
      <IconButton arial-label="Notifications" className="header-admin-notif">
        <Badge color="secondary" variant="dot">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <div className="header-profile-pic">
        <AdminPanelSettingsIcon />
      </div>
      <p className="header-admin-title">Administrator</p>
      <IconButton
        arial-label="Info"
        onClick={() => console.log("Hello World!")}
        className="header-admin-info"
      >
        <KeyboardArrowDownIcon />
      </IconButton>
    </div>
  );
}
