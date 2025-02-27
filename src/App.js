import BioSection from "./components/BioSection";
import CLI from "./components/CLI";
import ConnectBar from "./components/ConnectBar";
import WidgetsSection from "./components/WidgetsSection";
import "./styles.css";
import useEmojiRain from "./hooks/useEmojiRain";
import CLIcomponent from "./components/CLIcomponent";
import { useEffect, useState } from "react";
import { PartyModeProvider, usePartyMode } from "./context/PartyModeContext"; // Import Context

function AppContent() {
  const { isPartyMode } = usePartyMode(); // Use the context
  const emojis = useEmojiRain(isPartyMode);
  const [cliOpen, setCliOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "j") {
        e.preventDefault();
        setCliOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className={`min-h-screen ${
        isPartyMode ? "party-mode" : "bg-primary"
      }  text-white flex flex-col md:flex-row justify-center items-center`}
    >
      {emojis.map((emoji) => (
        <span
          key={emoji.id}
          className="fixed text-5xl emojis"
          style={{
            left: emoji.left,
            top: 0,
            animation: `fall ${emoji.animationDuration} linear forwards`,
          }}
        >
          {emoji.emoji}
        </span>
      ))}
      <ConnectBar />
      <CLI />
      <BioSection />
      <WidgetsSection />
      <CLIcomponent isOpen={cliOpen} toggleCLI={() => setCliOpen(!cliOpen)} />
    </div>
  );
}

// Wrap everything inside PartyModeProvider
export default function App() {
  return (
    <PartyModeProvider>
      <AppContent />
    </PartyModeProvider>
  );
}
