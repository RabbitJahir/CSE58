import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-black/20 backdrop-blur-sm text-center text-white">
      <p>
        &copy; CSE | <span className="rabbit-glow">Mr_Rabbit</span> |{" "}
        <span>
          <a
            href="https://github.com/RabbitJahir"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </span>
      </p>

      <p>
        <span
          className="
      relative
      bg-gradient-to-r 
      from-white via-[#FFD700] via-[#FFEC7D] via-[#FFD700] to-white
      bg-[length:220%_100%] 
      bg-clip-text 
      text-transparent 
      animate-[shine_2s_linear_infinite]
      drop-shadow-[0_0_5px_#FFD700]
      "
        >
          inspirators: BitRanger, Zirconium001, greyscale021, LulzSec6824, HelloTeam
        </span>
      </p>
    </footer>
  );
};

export default Footer;
