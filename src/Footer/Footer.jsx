// src/Footer/Footer.js

import { Box } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '60px',
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            gap: '10px',
            padding: '10px 0',
        }}>
            <Box sx={{
                display: 'flex',
                gap: '10px'
            }}>
                <CopyrightIcon />
                <Box>Pontus Bengtsson</Box>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px'
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
        </Box>
    );
}

export default Footer;
