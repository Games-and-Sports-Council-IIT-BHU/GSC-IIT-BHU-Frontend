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
          <Route path="/cricket" element={<Cricket/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
