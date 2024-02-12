import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import TeamCard from "../components/TeamCard";

function Sports() {
  const [scrolling, setScrolling] = useState(false);
  const data = [
    {
      name: "Cricket",
      imageUrl: "https://c8.alamy.com/comp/CC2TRA/cricket-player-batting-CC2TRA.jpg",
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter:"twitter",
      facebook:"facebook"
    },{
      name: "Cricket",
      imageUrl: "https://c8.alamy.com/comp/CC2TRA/cricket-player-batting-CC2TRA.jpg",
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter:"twitter",
      facebook:"facebook"
    },{
      name: "Cricket",
      imageUrl: "https://c8.alamy.com/comp/CC2TRA/cricket-player-batting-CC2TRA.jpg",
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter:"twitter",
      facebook:"facebook"
    },{
      name: "Cricket",
      imageUrl: "https://c8.alamy.com/comp/CC2TRA/cricket-player-batting-CC2TRA.jpg",
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter:"twitter",
      facebook:"facebook"
    },{
      name: "Cricket",
      imageUrl: "https://c8.alamy.com/comp/CC2TRA/cricket-player-batting-CC2TRA.jpg",
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter:"twitter",
      facebook:"facebook"
    },
  ];

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
      <div
        className=""
        style={{ background: "linear-gradient(to right, #ffe270, #ff914d)" }}
      >
        <div
          style={{
            position: "absolute",
            top: "31%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "16vw",
            color: "antiquewhite",
            opacity:'0.7'
          }}
        >
          Sports
        </div>
        <div className="flex items-center flex-wrap justify-center gap-20 pt-60 pb-20 px-10">
          {data.map((member) => (
            <div>
              <TeamCard
                name={member.name}
                image={member.imageUrl}
                gmail={member.email}
                instagram={member.instagram}
                linkedin={member.linkedin}
                facebook={member.facebook}
                twitter={member.twitter}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sports;
