/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Popup from "./Popup";
import Landing from "./pages/Landing";
import LoginPage from "./pages/Login";
import VideoRepository from "./pages/VideoRepository";
import SingleVideo from "./pages/SingleVideo";

function App() {
  return (
    <Router>
      <div className="bg-[#F4F6F8] h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="video-repository" element={<VideoRepository />}>
            <Route path=":videoId" element={<SingleVideo />} />
          </Route>
          <Route path="popup" element={<Popup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
