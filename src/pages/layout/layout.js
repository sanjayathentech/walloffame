import React from "react";

// scss
import "./layout.scss";

// mui components
import { Grid } from "@mui/material";
import Topachievers from "../top Achievers/topAchievers";
import Badges from "../badges/Badges";
import YourPeers from "../yourpeers/YourPeers";
import ProfileTop from "../profiletop.js/ProfileTop";

export default function Layout() {
  return (
    <>
      <Grid container>
        <Grid
          item
          xl="4 "
          lg="4"
          md="4"
          sm="6"
          xs="12"
          sx={{ backgroundColor: "#fff" }}
        >
          <Grid container>
            <Grid item xl="12" lg="12" md="12" sm="12" xs="12">
              <Topachievers />
            </Grid>
            <Grid item xl="6" lg="6" md="6" sm="6" xs="6">
              <Badges />
            </Grid>
            <Grid item xl="6" lg="6" md="6" sm="6" xs="6">
              <YourPeers />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xl="8"
          lg="8"
          md="8"
          sm="6"
          xs="12"
          className="right_profile_top_container"
        >
          <Grid container>
            <Grid item xl="12" lg="12" md="12" sm="12" xs="12">
              <ProfileTop />
            </Grid>
            <Grid item xl="8" lg="8" md="8" sm="12" xs="12"></Grid>
            <Grid item xl="4" lg="4" md="4" sm="12" xs="12"></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
