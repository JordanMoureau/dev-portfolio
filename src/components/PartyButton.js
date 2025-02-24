import { LuPartyPopper } from "react-icons/lu";
import { motion } from "framer-motion";

export default function PartyButton({ togglePartyMode }) {
  return (
    <motion.button
      className="text-2xl px-4 py-3 bg-opacity-20 font-bold bg-gradient-to-r from-[#F9C0AB] to-[#A8CD89] bg-clip-text"
      onClick={togglePartyMode}
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
      <LuPartyPopper />
    </motion.button>
  );
}
