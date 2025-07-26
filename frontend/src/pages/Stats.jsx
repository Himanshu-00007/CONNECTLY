import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import GroupIcon from '@mui/icons-material/Group';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import "../App.css";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2     // Trigger when 20% of the section is visible
  });

  return (
    <div className='stats' ref={ref}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "rgba(10, 25, 47, 0.5)" }}>
          <Toolbar>
            <div className='statnav'>
              <div className='heading'>
                <p>Connectly in Numbers: Breaking Distances, Powering Millions of Seamless Connections ❤️</p>
              </div>
              <div className='score'>
                <div className='scoreElement'>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#00BFFF' }}>
                    <GroupIcon /> &nbsp;
                    {inView && <CountUp start={0} end={1000} duration={2.5} separator="," />}+
                  </span>
                  <h3>Active Users per Month</h3>
                </div>
                <div className='scoreElement'>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#00BFFF' }}>
                    <MeetingRoomIcon /> &nbsp;
                    {inView && <CountUp start={0} end={5000} duration={2.5} separator="," />}+
                  </span>
                  <h3>Total Meetings Hosted</h3>
                </div>
                <div className='scoreElement'>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#00BFFF' }}>
                    <PersonAddAltIcon /> &nbsp;
                    {inView && <CountUp start={0} end={10000} duration={2.5} separator="," />}+
                  </span>
                  <h3>Total Participants Connected</h3>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
