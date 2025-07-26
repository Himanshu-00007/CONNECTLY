import React from 'react';
import "../App.css";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ShieldIcon from '@mui/icons-material/Shield';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import ChatIcon from '@mui/icons-material/Chat';
import AndroidIcon from '@mui/icons-material/Android';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import { useInView } from 'react-intersection-observer';

export default function Feature() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div className='feature' ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.8s ease-in-out' }}>
      <div>
        <h1 style={{ color: "#45B1E8" }}>OUR FEATURE</h1>
      </div>
      <div className='cardfeaturecontainer'>
        <div className='cardfeature'>
          <VerifiedUserIcon sx={{ color: "#45B1E8" }} fontSize='large' />
          <h3>Real-Time Video & Audio Communication</h3>
          <p>Seamless video/audio streaming using WebRTC. Users can toggle mic and camera instantly during the call.</p>
        </div>
        <div className='cardfeature'>
          <ShieldIcon sx={{ color: "#45B1E8" }} fontSize='large' />
          <h3>Secure Meeting Creation & Joining</h3>
          <p>Users can create or join meetings with unique, encrypted room links. Option to join as guest or authenticated user.</p>
        </div>
        <div className='cardfeature'>
          <ScreenShareIcon sx={{ color: "#45B1E8" }} fontSize='large' />
          <h3>Screen Sharing</h3>
          <p>Complete profile tracking system with verification to build credibility and trust within the sports community.</p>
        </div>
        <div className='cardfeature'>
          <ChatIcon sx={{ color: "#45B1E8" }} fontSize='large' />
          <h3>In-Meeting Chat</h3>
          <p>Share your entire screen, a window, or a browser tab. Ideal for presentations, demos, or teaching.</p>
        </div>
        <div className='cardfeature'>
          <AndroidIcon sx={{ color: "#45B1E8" }} fontSize='large' />
          <h3>Host Controls</h3>
          <p>Host can mute, remove users, or lock the meeting. Ensures privacy and moderation within the session.</p>
        </div>
        <div className='cardfeature'>
          <ClosedCaptionIcon sx={{ color: "#45B1E8" }} fontSize='large' />
          <h3>Auto-Captions & Transcripts</h3>
          <p>Real-time subtitles with downloadable transcripts. Accessibility and documentation made effortless.</p>
        </div>
      </div>
    </div>
  );
}
