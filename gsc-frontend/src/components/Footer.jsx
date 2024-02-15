import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import "../App.css";
import { Link } from "react-router-dom";
import instagram from "../images/instagram.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#2C2C2C] text-white w-full h-[16.5rem]">
        <div className="flex lg:flex-row justify-evenly flex-col">
          <ul className="lg:flex flex-col gap-2 mt-10 hidden">
            <li className="text-2xl font-extrabold">Other Links</li>
            <li className="hover:text-[#C7684A]">
              <Link to="/sports">Sports</Link>
            </li>
            <li className="hover:text-[#C7684A]">
              <Link to="/leagues">Leagues</Link>
            </li>
            {/* <li className="hover:text-[#C7684A]">
              <Link to="/clubs">Clubs and Societies</Link>
            </li> */}
            <li className="hover:text-[#C7684A]">
              <Link to="/spardha">Spardha</Link>
            </li>
            <li className="hover:text-[#C7684A]">
              <Link to="/interiit">Inter IIT</Link>
            </li>
          </ul>

          <ul className="lg:flex flex-col gap-2 mt-10 hidden">
            <li className="text-2xl font-extrabold">Quick Links</li>
            <li className="hover:text-[#C7684A]">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#C7684A]">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-[#C7684A]">
              <Link to="/events">Events</Link>
            </li>
            <li className="hover:text-[#C7684A]">
              <Link to="/contacts">Contact</Link>
            </li>
          </ul>

          <ul className="flex flex-col gap-2 mt-10 lg:items-start items-center">
            <li className="text-2xl font-extrabold">Contact Us</li>
            <li className="flex flex-row gap-2 items-center">
              <IoLocationSharp />
              IIT BHU, Varanasi
            </li>
            <li className="flex flex-row gap-2 items-center">
              Uttar Pradesh, India Pincode - 221005
            </li>
            <li className="flex flex-row gap-2 items-center">
              <FaPhoneAlt />
              +91 1234567890
            </li>
            <li className="flex flex-row gap-2 items-center">
              <MdAlternateEmail />
              xyz@gamil.com
            </li>
          </ul>
          <ul className="flex lg:flex-col text-3xl lg:mt-10 gap-4 flex-row justify-center mt-[1.5rem]">
            <li className="place-self-center">
              <Link
                to="https://www.instagram.com/games_and_sports_iitbhu/"
                target="_blank"
              >
                <img src={`${instagram}`} className="w-[42px] image-filter" />
              </Link>
            </li>
            <li className="place-self-center text-white hover:text-[#1869FF]">
              <Link
                to="https://www.facebook.com/gamesandsportscouncilIITBHU/"
                target="_blank"
              >
                <FaFacebook />
              </Link>
            </li>
            <li className="place-self-center text-white hover:text-[#0065C7]">
              <Link
                to="https://www.linkedin.com/company/games-and-sports-council-iit-bhu-varanasi/mycompany/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
            </li>
            <li className="place-self-center text-white hover:text-[#FF0002]">
              <Link
                to="https://www.youtube.com/watch?v=5rVw16UHLNw&ab_channel=Film%26MediaCouncil%2CIIT%28BHU%29Varanasi"
                target="_blank"
              >
                <FaYoutube />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
