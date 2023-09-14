import { Box, Typography } from "@mui/material";
import useMusicPlayer from "../hooks/useMusicPlayer";
import PauseRounded from "@mui/icons-material/PauseRounded";
import HeadphonesIcon from "@mui/icons-material/Headphones";
const TrackList = () => {
  const { trackList, playTrack, isPlaying, currentTrackIndex } =
    useMusicPlayer();
  const iconStyle = {
    fontSize: "1.2rem",
    backgroundColor: "#b36c8c",
    borderRadius: "50%",
    color: "#fcbcb8",
    marginRight: "0.5rem",
    padding: "0.2rem",
  };
  return (
    <div style={{ padding: "40px" }}>
      {trackList.map((track, index) => (
        // ( Surprise us with your code here)
        <div
          key={index}
          className="song-title"
          onClick={() => playTrack(index)}
        >
          <Box display="flex" alignItems="center" mb={2}>
            {isPlaying && index === currentTrackIndex ? (
              <HeadphonesIcon sx={iconStyle} />
            ) : (
              <PauseRounded sx={iconStyle} />
            )}
            <Typography
              sx={{
                color: "#812b78",
              }}
            >
              <b>{track.name}</b>
            </Typography>
          </Box>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
