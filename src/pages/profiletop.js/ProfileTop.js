import { Avatar } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import "./profiletop.scss";

function ProfileTop() {
  return (
    <div className="profile_top_right_container">
      <div className="profile_top_right">
        <Stack className="profile_number">
          <span className="profilenumber_head">24</span>
          <span className="profile_subheading">Recognitions</span>
        </Stack>

        <Stack className="profile_number">
          <Avatar
            src="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
            alt="yourprofile"
            sx={{ height: 90, width: 90 }}
          />

          <span className="profile_welcome_head">Welcome, Jane</span>
          <span className="profile_subheading">1900 Points</span>
        </Stack>

        <Stack className="profile_number">
          <span className="profilenumber_head">8</span>
          <span className="profile_subheading">Achieverments</span>
        </Stack>
      </div>
    </div>
  );
}

export default ProfileTop;
