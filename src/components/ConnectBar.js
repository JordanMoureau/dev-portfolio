import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import PartyButton from "./PartyButton";

export default function ConnectBar({ togglePartyMode }) {
  return (
    <div className="fixed bg-opacity-70 top-5 z-50 px-5 bg-tertiary shadow-md flex justify-center items-center rounded-full">
      <div className="flex">
        {[
          { icon: <FaLinkedin />, link: "https://linkedin.com" },
          { icon: <FaInstagram />, link: "https://instagram.com" },
          { icon: <FaGithub />, link: "https://github.com" },
          { icon: <FaFacebook />, link: "https://facebook.com" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFF5F3] text-2xl px-4 py-3 bg-opacity-20 relative"
            whileHover={{
              scale: 1.2,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
              },
            }}
            whileTap={{
              scale: 0.9,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 20,
              },
            }}
          >
            {item.icon}
          </motion.a>
        ))}

        <PartyButton togglePartyMode={togglePartyMode} />
      </div>
    </div>
  );
}
