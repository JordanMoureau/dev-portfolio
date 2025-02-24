import { useState } from "react";

export default function usePartyMode() {
  const [isPartyMode, setIsPartyMode] = useState(false);

  const togglePartyMode = () => {
    setIsPartyMode((prev) => !prev);
    console.log("✨ party mode ✨");
  };

  return { isPartyMode, togglePartyMode };
}
