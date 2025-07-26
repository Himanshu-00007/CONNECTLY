import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField, Paper, Typography, Box, Stack } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {
    const navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const { addToUserHistory } = useContext(AuthContext);

    const handleJoinVideoCall = async () => {
        if (!meetingCode.trim()) return;
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`);
    }

    return (
        <Box sx={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
            <Box className="navBar" sx={{ backgroundColor: '#0A192F', color: 'white', px: 3, py: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: 3 }}>
                <Typography variant="h5" fontWeight={600}>CONNECTLY</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Button onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/");
                    }} variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>Logout</Button>
                </Stack>
            </Box>

            <Box className="meetContainer" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', px: 4, py: 6 }}>
                <Paper elevation={6} sx={{ p: 4, borderRadius: 3, maxWidth: 500, width: '100%', mr: { xs: 0, md: 6 }, mb: { xs: 4, md: 0 } }}>
                    <Typography variant="h4" gutterBottom fontWeight={600} color="primary">Join a Meeting</Typography>
                    <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                        Providing Quality Video Calls Just Like Quality Education
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <TextField
                            onChange={e => setMeetingCode(e.target.value)}
                            label="Meeting Code"
                            variant="outlined"
                            fullWidth
                        />
                        <Button onClick={handleJoinVideoCall} variant="contained" size="large">
                            Join
                        </Button>
                    </Stack>
                </Paper>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/logo3.png" alt="Video Call" style={{ maxWidth: '100%', height: 'auto', borderRadius: 20, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }} />
                </Box>
            </Box>
        </Box>
    );
}
export default withAuth(HomeComponent);