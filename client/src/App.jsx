import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import { LandingPage } from "./components/LandingPage";
import { MeetingPage } from "./components/MeetingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MeetingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
