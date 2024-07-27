import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Sports from "./pages/Sports";
import Contact from "./pages/Contact";
import Cricket from "./pages/Cricket";
import IndividualEventsPage from "./pages/IndividualEventsPage";
import Aquatics from "./pages/Aquatics";
import Badminton from "./pages/Badminton";
import Basketball from "./pages/Basketball";
import Football from "./pages/Football";
import Hockey from "./pages/Hockey";
import Squash from "./pages/Squash";
import Volleyball from "./pages/Volleyball";
import Atheletics from "./pages/Atheletics";
import Taekwondo from "./pages/Taekwondo";
import Tennis from "./pages/Tennis";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:event" element={<IndividualEventsPage />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/aquatics" element={<Aquatics />} />
          <Route path="/atheletics" element={<Atheletics />} />
          <Route path="/badminton" element={<Badminton />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/football" element={<Football />} />
          <Route path="/hockey" element={<Hockey />} />
          <Route path="/squash" element={<Squash />} />
          <Route path="/tennis" element={<Tennis />} />
          <Route path="/taekwondo" element={<Taekwondo />} />
          <Route path="/volleyball" element={<Volleyball />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
