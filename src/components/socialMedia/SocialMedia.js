import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-inbox"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.discord}
        className="icon-button discord"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-discord"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.telegram}
        className="icon-button telegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-telegram"></i>
        <span></span>
      </a>
    </div>
  );
}
