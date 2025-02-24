import BioSection from "./components/BioSection";
import CLI from "./components/CLI";
import ConnectBar from "./components/ConnectBar";
import WidgetsSection from "./components/WidgetsSection";
import "./styles.css";
import useEmojiRain from "./hooks/useEmojiRain";
import CLIcomponent from "./components/CLIcomponent";
import { useEffect, useState } from "react";

import usePartyMode from "./hooks/usePartyMode";

function App() {
  const { isPartyMode, togglePartyMode } = usePartyMode();
  const emojis = useEmojiRain(isPartyMode);
  const [cliOpen, setCliOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "j") {
        e.preventDefault(); // Prevent browser conflicts
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
      <ConnectBar togglePartyMode={togglePartyMode} />
      <CLI isPartyMode={isPartyMode} />
      <BioSection />
      <WidgetsSection />
      <CLIcomponent
        togglePartyMode={togglePartyMode}
        isOpen={cliOpen}
        toggleCLI={() => setCliOpen(!cliOpen)}
      />
    </div>
  );
}

export default App;
