import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutPage from "./components/About";
import ProgramsPage from "./components/Programspage";
import LeadershipPage from "./components/Leadershippage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;