import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex justify-center  gap-3 w-full max-w-md">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
            <a
              href="mailto:amermuhamedamer@gmail.com"
              className="hover:text-blue-500"
            >
              amermuhamedamer@gmail.com{" "}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
            <a
              href="https://www.linkedin.com/in/amer-mohamed-b43064263"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
            <a
              href="https://github.com/amerMuhamed"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              GitHub
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="text-xl" />
            <span>+201157789596</span>
          </div>
        </div>
        <div className="text-center">
          <p>© 2024 Seira-Shop. All rights reserved.</p>
          <p>
            Made with <span className="text-red-500"></span> by Amer Mohamed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
