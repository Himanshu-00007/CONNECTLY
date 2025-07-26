import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';

export default function History() {
    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]); // Default to an empty array
    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                console.log("Fetched Meeting History:", history); // Debugging log
                
                // Ensure it's always an array
                setMeetings(Array.isArray(history) ? history : []);
            } catch (error) {
                console.error("Error fetching history:", error);
                setMeetings([]);  // Fallback to empty array in case of error
            }
        };

        fetchHistory();
    }, []);

    // Helper function to format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div>
            <IconButton onClick={() => routeTo("/home")}>
                <HomeIcon />
            </IconButton>

            {Array.isArray(meetings) && meetings.length > 0 ? (
                meetings.map((e, i) => (
                    <Card key={i} variant="outlined" sx={{ margin: "10px", padding: "10px" }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Code: {e.meetingCode}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Date: {formatDate(e.date)}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Typography sx={{ textAlign: "center", marginTop: "20px" }}>
                    No meeting history available.
                </Typography>
            )}
        </div>
    );
}
