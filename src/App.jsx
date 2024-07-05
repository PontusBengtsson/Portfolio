import { Box, Avatar } from '@mui/material';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import './App.css';

function App() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: 'white',
        }}>
            <Navbar />
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center', // Center content vertically
                
                padding: '20px' // Optional padding for spacing
            }}>
                <Avatar sx={{
                    width: '600px',
                    height: 'auto',
                    margin: '25px'
                }} alt="Pontus" src="pbnewpic.jpg" />
                <Box sx={{ color: 'black', marginLeft: '20px' }}>Har int sö myck å kom mä</Box> {/* Optional margin for spacing */}
            </Box>
            <Footer />
        </Box>
    );
}

export default App;
