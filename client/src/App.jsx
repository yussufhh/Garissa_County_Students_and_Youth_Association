import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutPage from "./components/About";
import ProgramsPage from "./components/Programspage";
import LeadershipPage from "./components/Leadershippage";
import Footer from "./components/Footer";
import Event from "./components/Events";
import Events from "./components/Events";
import Contacts from "./components/Contacts";



function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/events" element={<Events />} />
          <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;