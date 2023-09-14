import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { Typography } from "@mui/material";

export default function MusicPlayerSlider() {
  const theme = useTheme();
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  const {
    currentTrackName,
    currentTrackIndex,
    isPlaying,
    togglePlay,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Box sx={{ textAlign: "center", minWidth: 0 }}>
        <Typography noWrap letterSpacing={-0.25}>
          <b>{currentTrackName}</b>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: -1,
        }}
      >
        <IconButton
          aria-label="previous song"
          onClick={() => playPreviousTrack()}
          disabled={currentTrackIndex === null}
        >
          <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
        <IconButton
          aria-label={!isPlaying ? "play" : "pause"}
          disabled={currentTrackIndex === null}
          onClick={() => togglePlay()}
        >
          {!isPlaying ? (
            <PlayArrowRounded
              sx={{ fontSize: "3rem" }}
              htmlColor={mainIconColor}
            />
          ) : (
            <PauseRounded sx={{ fontSize: "3rem" }} htmlColor={mainIconColor} />
          )}
        </IconButton>
        <IconButton
          aria-label="next song"
          onClick={() => playNextTrack()}
          disabled={currentTrackIndex === null}
        >
          <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
      </Box>
    </Box>
  );
}
