import React from "react";
import "./TeamCard.css";
import { Gmail } from "@styled-icons/boxicons-logos/Gmail";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Facebook } from "@styled-icons/boxicons-logos";
import { Twitter } from "@styled-icons/boxicons-logos";
function TeamCard(props) {
  // console.log(props.image);
  return (
    <div className="cardbox shadow-lg" style={{ backgroundImage: `url(${props.image})` }}>
      <div className="card-content">
        <h2 className="card-title">{props.name}</h2>

        <div className="btn">
        <a
            href={"//" + props.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className=" h-8 text-white hover:text-pink-400"></Instagram>
          </a>
          <a  href={"//" + props.facebook}
            target="_blank"
            rel="noopener noreferrer">
            <Facebook className=" h-8 text-white hover:text-red"></Facebook>
          </a>
          <a
            href={"//" + props.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className=" h-8 text-white hover:text-blue"></Linkedin>
          </a>
          <a
            href={"//" + props.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className=" h-8 text-white hover:text-pink-400"></Twitter>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
