import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const LatestProjects = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        padding: "10px 0",
      }}
    >
      <Box>Mina senaste project</Box>
      <Box
        sx={{
          display: "flex",
          gap: '10px'
        }}
      >
        <Button
          sx={{
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
          variant="contained"
        >
          Spotify-clone
        </Button>
        <Button variant="contained">Todo-app</Button>
        <Button variant="contained">Password-generator</Button>
      </Box>
    </Box>
  );
};

export default LatestProjects;
