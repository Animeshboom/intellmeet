import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import MeetingPage from "./pages/MeetingPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/meeting" element={<MeetingPage />} />
      </Routes>
    </Router>
  );
}

export default App;