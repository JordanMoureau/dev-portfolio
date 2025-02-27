import { createContext, useContext, useState } from "react";

// Create Context
const PartyModeContext = createContext();

// Context Provider
export function PartyModeProvider({ children }) {
  const [isPartyMode, setIsPartyMode] = useState(false);

  const togglePartyMode = () => setIsPartyMode((prev) => !prev);

  return (
    <PartyModeContext.Provider value={{ isPartyMode, togglePartyMode }}>
      {children}
    </PartyModeContext.Provider>
  );
}

// Custom Hook to Use Context
export function usePartyMode() {
  return useContext(PartyModeContext);
}
