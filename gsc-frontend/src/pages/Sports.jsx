import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import TeamCard from "../components/TeamCard";
import cricket from "../assets/cricket.png";
import aquatics from "/assets/Aquatics/Aquatics8.jpg";
import squash from "/assets/Squash/squash.jpg";
import tennis from "/assets/Tennis/tennis.jpg";
import taekwondo from "/assets/Taekwondo/taekwondo.jpg";
import atheletics from "/assets/Atheletics/Atheletics4.jpg";
import { Link } from "react-router-dom";
function Sports() {
  const [scrolling, setScrolling] = useState(false);
  const data = [
    {
      name: "Aquatics",
      imageUrl: aquatics,
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter: "twitter",
      facebook: "facebook",
    },
    {
      name: "Atheletics",
      imageUrl: atheletics,
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter: "twitter",
      facebook: "facebook",
    },
    {
      name: "Squash",
      imageUrl: squash,
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter: "twitter",
      facebook: "facebook",
    },
    {
      name: "Tennis",
      imageUrl: tennis,
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter: "twitter",
      facebook: "facebook",
    },
    {
      name: "Taekwondo",
      imageUrl: taekwondo,
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter: "twitter",
      facebook: "facebook",
    },
    {
      name: "Cricket",
      imageUrl: cricket,
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter: "twitter",
      facebook: "facebook",
    },
    {
      name: "Cricket",
      imageUrl: cricket,
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter: "twitter",
      facebook: "facebook",
    },
    {
      name: "Cricket",
      imageUrl: cricket,
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter: "twitter",
      facebook: "facebook",
    },
    {
      name: "Cricket",
      imageUrl: cricket,
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter: "twitter",
      facebook: "facebook",
    },
    {
      name: "Cricket",
      imageUrl: cricket,
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter: "twitter",
      facebook: "facebook",
    },
    {
      name: "Cricket",
      imageUrl: cricket,
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter: "twitter",
      facebook: "facebook",
    },
    {
      name: "Cricket",
      imageUrl: cricket,
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter: "twitter",
      facebook: "facebook",
    },
    {
      name: "Cricket",
      imageUrl: cricket,
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter: "twitter",
      facebook: "facebook",
    },
    {
      name: "Cricket",
      imageUrl: cricket,
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter: "twitter",
      facebook: "facebook",
    },
    {
      name: "Cricket",
      imageUrl: cricket,
      email: "john.doe@example.com",
      instagram: "john_doe_instagram",
      linkedin: "john_doe_linkedin",
      twitter: "twitter",
      facebook: "facebook",
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
            // top: "17%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "11vw",
            color: "antiquewhite",
            opacity: "0.6",
            // fontFamily:'lexend zetha',
            fontWeight: "bold",
          }}
          className="font-lexend top-32 md:top-48 sm:top-40 "
        >
          Sports
        </div>
        <div className="flex items-center flex-wrap justify-center sm:gap-20 pt-36 sm:pt-52 md:pt-64 pb-20 px-10">
          {data.map((member) => (
            <Link to={`/${(member.name).toLowerCase()}`}>
              <TeamCard
                name={member.name}
                image={member.imageUrl}
                gmail={member.email}
                instagram={member.instagram}
                linkedin={member.linkedin}
                facebook={member.facebook}
                twitter={member.twitter}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sports;
