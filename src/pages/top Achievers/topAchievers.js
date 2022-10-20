import React from "react";

// scss
import "./topAchievers.scss";

// mui
import { Grid, Avatar, Badge } from "@mui/material";
import { Box, Stack } from "@mui/system";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#999999",
    },
    secondary: {
      main: "#ff9c2f",
    },
    error: {
      main: "#c3a788",
    },
  },
});

const imageheightwidth = 70;

export default function Topachievers() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container className="top_achievers_container">
        <Grid item xl="12" lg="12" md="12" sm="12" xs="12">
          <div className="top_achievers_container">
            <div className="container">
              <div className="title_container">
                <span className="top_achievers_title">Top Achievers</span>
              </div>
              <div className="top_achievers_container2">
                <div className="top_achievers_images">
                  <Stack className="top_achievers_avatar_bottom">
                    <Box>
                      <Badge
                        overlap="circular"
                        badgeContent={2}
                        color="primary"
                        className="top_achievers_badge"
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
                          sx={{
                            width: imageheightwidth,
                            height: imageheightwidth,
                          }}
                        />
                      </Badge>
                    </Box>
                    <span className="top_achievers_name">Robert</span>
                    <span className="top_achievers_points">
                      4100{" "}
                      <span className="top_achievers_points_span">points</span>
                    </span>
                  </Stack>

                  <Stack className="top_achievers_avatar_top">
                    <Box>
                      <Badge
                        overlap="circular"
                        badgeContent={1}
                        color="secondary"
                        className="top_achievers_badge"
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
                          sx={{
                            width: imageheightwidth,
                            height: imageheightwidth,
                          }}
                        />
                      </Badge>
                    </Box>

                    <span className="top_achievers_name">Siena</span>
                    <span className="top_achievers_points">
                      4850{" "}
                      <span className="top_achievers_points_span">points</span>
                    </span>
                  </Stack>

                  <Stack className="top_achievers_avatar_bottom">
                    <Box>
                      <Badge
                        overlap="circular"
                        badgeContent={3}
                        color="error"
                        className="top_achievers_badge"
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
                          sx={{
                            width: imageheightwidth,
                            height: imageheightwidth,
                          }}
                        />
                      </Badge>
                    </Box>

                    <span className="top_achievers_name">Kristin</span>
                    <span className="top_achievers_points">
                      3700{" "}
                      <span className="top_achievers_points_span">points</span>
                    </span>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
