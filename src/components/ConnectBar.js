import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import PartyButton from "./PartyButton";
import { usePartyMode } from "../context/PartyModeContext"; // Import the context

export default function ConnectBar() {
  const { togglePartyMode } = usePartyMode(); // Get togglePartyMode from context

  return (
    <div className="fixed bg-opacity-70 top-5 z-50 px-5 bg-tertiary shadow-md flex justify-center items-center rounded-full">
      <div className="flex">
        {[
          {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/jordan-moureau-28b862255/",
          },
          {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/freelancejordan/",
          },
          { icon: <FaGithub />, link: "https://github.com/JordanMoureau" },
          {
            icon: <FaFacebook />,
            link: "https://www.facebook.com/profile.php?id=61560853709737",
          },
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
        <PartyButton togglePartyMode={togglePartyMode} /> {/* No more props! */}
      </div>
    </div>
  );
}
