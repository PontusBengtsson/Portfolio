import { Box, Avatar, Button, Link } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useTheme } from "@mui/material/styles";

const HomePage = () => {
  const theme = useTheme();

  // Definiera en enhetlig stil för knapparna (svart bakgrund och rätt textfärg)
  const buttonStyles = {
    backgroundColor: 'black', // Svart bakgrund från background.default
    color: theme.palette.primary.contrastText, // Vit text från primary.contrastText
    "&:hover": {
      backgroundColor: 'grey', // Hover-effekt från primary.dark
    },
    padding: "8px 16px",
    fontSize: "1rem",
  };

  const projects = [
    { name: "Flag-App", url: "https://pb-flag-app.netlify.app/" },
    { name: "Spotify-clone", url: "https://spotifyclone-pb.netlify.app/" },
    { name: "Todo-app", url: "https://todo-pb.netlify.app/" },
    { name: "Password-generator", url: "https://password-gen-pb.netlify.app/" },
    { name: "Motivation-generator", url: "https://motivation-gen-pb.netlify.app/" },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'white',
      }}
    >
      <Navbar /> {/* Navbar flyttad hit */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: '20px'
      }}>
        <Avatar sx={{
          width: '400px',
          height: 'auto',
          margin: '25px'
        }} alt="Pontus" src="/pbnewpic.jpg" />
        <Box>
        <Box sx={{ color: 'black', marginLeft: '20px' }}>
          <Box sx={{ fontSize: "1.5rem", fontWeight: "bold", color: theme.palette.text.primary }}>
            Mina senaste projekt
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {projects.map((project) => (
              <Link key={project.url} href={project.url} target="_blank" underline="none">
                <Button sx={buttonStyles} variant="contained">
                  {project.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Box>
        </Box>
      </Box>
      <Footer /> {/* Footer flyttad hit */}
    </Box>
  );
};

export default HomePage;
