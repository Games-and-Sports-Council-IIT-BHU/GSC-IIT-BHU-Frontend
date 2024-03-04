import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import EventsHero from "../components/Events/EventsHero";

function Events() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrolling) {
        setScrolling(true);
      } else if (window.scrollY === 0 && scrolling) {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);
  return (
    <>
      <Navbar scrolling={scrolling} />
      <EventsHero />
    </>
  );
}

export default Events;
