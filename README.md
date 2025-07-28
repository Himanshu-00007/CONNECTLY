# CONNECTLY

#🌐 Live Website: https://connectly-wc1l.onrender.com/

## 🌟 Overview

ConnectLy is a modern, feature-rich video conferencing platform designed to bring people together seamlessly. Inspired by industry-leading solutions, ConnectLy offers crystal-clear video quality, robust collaboration tools, and an intuitive user experience that makes virtual meetings feel natural and productive.

## ✨ Key Features

### 🎯 Core Functionality
- **HD Video Conferencing** - Crystal clear video quality up to 1080p
- **High-Quality Audio** - Noise cancellation and echo reduction
- **Screen Sharing** - Share your entire screen or specific applications
- **Real-time Chat** - In-meeting messaging with file sharing capabilities
- **Recording & Playback** - Record meetings for later review
- **Virtual Backgrounds** - Professional backgrounds and blur effects

### 👥 Collaboration Tools
- **Interactive Whiteboard** - Collaborative drawing and annotation tools
- **Breakout Rooms** - Split participants into smaller discussion groups
- **Polls & Reactions** - Engage participants with real-time feedback
- **Hand Raising** - Organized Q&A and discussion management
- **Participant Management** - Host controls for muting, removing, and managing attendees



## 💻 Technology Stack

### Frontend
- **React 18** - Modern React with hooks and context
- **Tailwind CSS** - Utility-first styling
- **Socket.io Client** - Real-time communication

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **Socket.io** - Real-time bidirectional communication
- **MongoDB** - NoSQL database for user data and meeting records

### Media & Communication
- **WebRTC** - Peer-to-peer video/audio communication
- **MediaSoup** - Selective Forwarding Unit (SFU) for group calls
- **Redis** - In-memory data structure store for session management



## 📁 Project Structure

```
connectly/
├── client/                 # React frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API services
│   │   └── utils/         # Utility functions
│   └── package.json
├── server/                # Node.js backend application
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Express middleware
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── services/         # Business logic services
│   └── utils/            # Server utilities
├── docs/                 # Documentation files
├── tests/                # Test files
└── package.json
```


*Made with ❤️ by Himanshu Pandey*
