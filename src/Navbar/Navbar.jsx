// src/Navbar/Navbar.js

import { Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
    return ( 
        <Box sx={{
            width: '100%',
            padding:'15px',
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            gap: '10px'
        }}>
            <Box>Pontus</Box>
            <Box sx={{
                display:'flex',
                justifyContent:'center',
                gap:'10px'
            }}>
                <a href="#project" style={{ color: 'white', textDecoration: 'none' }}>
                    <Box>Project</Box>
                </a>
                <a href="#galleri" style={{ color: 'white', textDecoration: 'none' }}>
                    <Box>Galleri</Box>
                </a>
                <a href="#om" style={{ color: 'white', textDecoration: 'none' }}>
                    <Box>Om</Box>
                </a>
                <a href="#kontakt" style={{ color: 'white', textDecoration: 'none' }}>
                    <Box>Kontakt</Box>
                </a>
            </Box>
            <Box sx={{
                display:'flex',
                gap:'10px'
            }}>
                <a href="https://www.instagram.com/pontusmattias/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon style={{ color: 'white' }}/>
                </a>
                <a href="https://www.facebook.com/pontusmattiasbengtsson" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon style={{ color: 'white' }}/>
                </a>
                <a href="https://www.linkedin.com/in/pontus-bengtsson-38b83024a/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon style={{ color: 'white' }}/>
                </a>
                <a href="https://github.com/PontusBengtsson" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon style={{ color: 'white' }}/>
                </a>
            </Box>
        </Box>
    );
}

export default Navbar;
