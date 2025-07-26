import {Route,Routes,BrowserRouter as Router} from "react-router-dom";
import Landing from "./pages/Landing";
import Authentication from "./pages/Authentication";
import { AuthProvider } from "./contexts/AuthContext";
import VideoMeetComponent from "./pages/VideoMeet";
import HomeComponent from "./pages/Home";
import History from './pages/History';  

function App() {
  

  return (
    <>
      <Router>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/auth" element={<Authentication/>}/>
          <Route path="/Home" element={<HomeComponent/>}/>
          <Route path='/history' element={<History />} />
          <Route path="/:url" element={<VideoMeetComponent/>} />
          
        </Routes>
        </AuthProvider> 
      </Router>
    </>
  )
}

export default App
